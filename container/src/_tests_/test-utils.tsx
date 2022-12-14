import React, {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';


const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
    /**
     * import the providers and wrap the children to include global context providers, data stores etc
     */
  return (
    <>
    <MemoryRouter>
        {children}
    </MemoryRouter>
    </>
     
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}