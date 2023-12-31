import { FileOpen, MenuOpen, PictureAsPdf } from '@mui/icons-material'
import {
  Backdrop,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import {
  ColumnFiltersState,
  PaginationState,
  RowSelectionState,
  SortingState,
} from '@tanstack/react-table'
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table'
import React, { FunctionComponent, useMemo, useState } from 'react'

import { numberWithCommas } from '../../../../base/components/MyInputs/NumberInput'
import SimpleMenu, { StyledMenuItem } from '../../../../base/components/MyMenu/SimpleMenu'
import { PAGE_DEFAULT, PageProps } from '../../../../interfaces'
import { genApiQuery, openInNewTab } from '../../../../utils/helper'
import { localization } from '../../../../utils/localization'
import { muiTableHeadCellFilterTextFieldProps } from '../../../../utils/materialReactTableUtils'
import { fetchFacturaListado } from '../../../ventas/api/factura.listado.api'
import { FacturaProps } from '../../../ventas/interfaces/factura'

const tableColumns: MRT_ColumnDef<FacturaProps>[] = [
  {
    header: 'Número',
    accessorKey: 'numeroFactura',
    size: 120,
  },
  {
    accessorKey: 'fechaEmision',
    header: 'Fecha Emisión',
    id: 'fechaEmision',
    size: 150,
    enableColumnFilter: false,
  },
  {
    header: 'Importe',
    accessorKey: 'montoTotal',
    muiTableBodyCellProps: {
      align: 'right',
    },
    Cell: ({ cell }) => <span>{numberWithCommas(cell.getValue() as number, {})}</span>,
    size: 100,
    enableColumnFilter: false,
  },
  {
    header: 'Razon Social',
    id: 'cliente.razonSocial',
    accessorKey: 'cliente.razonSocial',
    maxSize: 180,
  },
  {
    id: 'cliente.numeroDocumento',
    header: 'Nro. Documento',
    accessorFn: (row) => (
      <span>
        {row.cliente.numeroDocumento}{' '}
        {row.cliente.complemento ? `-${row.cliente.complemento}` : ''}
      </span>
    ),
    filterFn: (row, id, filterValue) =>
      row.original.cliente.numeroDocumento.startsWith(filterValue),
  },
  {
    accessorKey: 'cuf',
    id: 'cuf',
    header: 'C.U.F.',
  },
  {
    accessorKey: 'state',
    id: 'state',
    header: 'ESTADO',
  },
]

interface OwnProps {
  id: string
  keepMounted: boolean
  open: boolean
  onClose: (value?: FacturaProps) => void
}

type Props = OwnProps

const NcdFacturaOriginalDialog: FunctionComponent<Props> = (props) => {
  const { onClose, open, ...other } = props

  const handleCancel = () => {
    onClose()
  }

  // ESTADO DATATABLE
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: PAGE_DEFAULT.page,
    pageSize: 5,
  })
  const [rowCount, setRowCount] = useState(0)
  const [isRefetching, setIsRefetching] = useState(false)
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  // FIN ESTADO DATATABLE

  const { data, isError, isLoading, refetch } = useQuery<FacturaProps[]>(
    [
      'NcdGestionFacturas',
      columnFilters,
      pagination.pageIndex,
      pagination.pageSize,
      sorting,
    ],
    async () => {
      const query = genApiQuery(columnFilters, ['state=VALIDADA'])
      const fetchPagination: PageProps = {
        ...PAGE_DEFAULT,
        page: pagination.pageIndex + 1,
        limit: pagination.pageSize,
        reverse: sorting.length <= 0,
        query,
      }
      const { pageInfo, docs } = await fetchFacturaListado(fetchPagination)
      setRowCount(pageInfo.totalDocs)
      return docs
    },
  )
  const columns = useMemo(() => tableColumns, [])

  const setNotaCreditoDebito = (factura: FacturaProps) => {
    onClose(factura)
  }

  const BlurredBackdrop = styled(Backdrop)(({ theme }) => ({
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: theme.zIndex.drawer + 1,
  }))
  const handleClose = () => {
    onClose()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }
  return (
    <>
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 550 } }}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        BackdropComponent={BlurredBackdrop}
        {...other}
      >
        <DialogTitle>Seleccione su Factura</DialogTitle>
        <DialogContent dividers>
          <MaterialReactTable
            columns={columns}
            data={data ?? []}
            initialState={{
              showColumnFilters: true,
              columnVisibility: { cuf: false, state: false },
            }}
            manualFiltering
            manualPagination
            manualSorting
            muiToolbarAlertBannerProps={
              isError
                ? {
                    color: 'error',
                    children: 'Error loading data',
                  }
                : undefined
            }
            onColumnFiltersChange={setColumnFilters}
            onPaginationChange={setPagination}
            onSortingChange={setSorting}
            enableDensityToggle={false}
            enableGlobalFilter={false}
            rowCount={rowCount}
            localization={localization}
            state={{
              isLoading,
              columnFilters,
              pagination,
              showAlertBanner: isError,
              showProgressBars: isRefetching,
              density: 'compact',
              sorting,
              rowSelection,
            }}
            muiSearchTextFieldProps={{
              variant: 'outlined',
              placeholder: 'Busqueda',
              InputLabelProps: { shrink: true },
              size: 'small',
            }}
            enableRowActions
            positionActionsColumn={'first'}
            renderRowActions={({ row }) => (
              <>
                <SimpleMenu
                  menuButton={
                    <>
                      <IconButton aria-label="delete">
                        <MenuOpen />
                      </IconButton>
                    </>
                  }
                >
                  <StyledMenuItem
                    onClick={() => {
                      openInNewTab(row.original.representacionGrafica.pdf)
                    }}
                  >
                    <PictureAsPdf /> Pdf Medio Oficio
                  </StyledMenuItem>

                  <StyledMenuItem
                    onClick={() => {
                      openInNewTab(row.original.representacionGrafica.xml)
                    }}
                  >
                    <FileOpen /> Xml
                  </StyledMenuItem>

                  <StyledMenuItem
                    onClick={() => {
                      openInNewTab(row.original.representacionGrafica.sin)
                    }}
                  >
                    <FileOpen /> Url S.I.N.
                  </StyledMenuItem>
                </SimpleMenu>
                <Button
                  size={'small'}
                  variant={'contained'}
                  color={'info'}
                  onClick={() => setNotaCreditoDebito(row.original)}
                  style={{
                    width: '70px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '12px',
                  }}
                >
                  Seleccionar
                </Button>
              </>
            )}
            muiTableHeadCellFilterTextFieldProps={{
              ...muiTableHeadCellFilterTextFieldProps,
            }}
            muiTableProps={{
              sx: {
                tableLayout: 'fixed',
              },
            }}
            displayColumnDefOptions={{
              'mrt-row-actions': {
                muiTableHeadCellProps: {
                  align: 'center',
                },
                size: 120,
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color={'error'}
            size={'small'}
            variant={'contained'}
            onClick={handleCancel}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default NcdFacturaOriginalDialog
