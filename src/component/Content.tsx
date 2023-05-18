import * as React from 'react'
import {Box, Button, Container, Typography} from "@mui/material"
import {IGetProducts} from "@/component/interfaces/product.interface"
import {FC} from "react"

const Content: FC<IGetProducts> = ({products}) => {
  return (
    <>
      <Container>
        {products.map(product => <div key={product.id}>
          <Box>
            <Typography variant={"h6"}>{product.title}</Typography>
            <Button>Подписаться</Button>
          </Box>
        </div>)}
      </Container>
    </>
  )
}

export default Content