import { ReactNode } from 'react'
import { Box } from '@mantine/core'

export default function Content({ children }: { children: ReactNode }) {
  return <Box size="xl">{children}</Box>
}
