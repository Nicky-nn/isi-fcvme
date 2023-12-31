import { Box, styled, Theme } from '@mui/system'

import useSettings from '../../../hooks/useSettings'
import { Span } from '../Typography'

const BrandRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 18px 20px 29px',
})) as typeof Box

interface StyledSpanProps {
  theme?: Theme
  mode: any
  child: JSX.Element | JSX.Element[]
}
const StyledSpan: any = styled(Span)(({ theme, mode }: StyledSpanProps) => ({
  fontSize: 18,
  marginLeft: '.5rem',
  display: mode === 'compact' ? 'none' : 'block',
}))

const Brand = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { settings } = useSettings()
  const leftSidebar = settings.layout1Settings.leftSidebar
  const { mode } = leftSidebar

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <img
          src="/assets/images/logo_dark.png"
          style={{ height: 30, marginTop: -15 }}
          alt=""
        />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          ISI.INVOICE
        </StyledSpan>
      </Box>
      <Box
        className="sidenavHoverShow"
        sx={{ display: mode === 'compact' ? 'none' : 'block' }}
      >
        {children || null}
      </Box>
    </BrandRoot>
  )
}

export default Brand
