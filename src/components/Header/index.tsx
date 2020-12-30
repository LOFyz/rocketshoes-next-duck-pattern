// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart } from './styles'

const Header: React.FC = () => {
  // Esse use selector é basicamente quantos produtos diferentes tem no carrinho
  const cartSize = useSelector(state => state.cart.product.length)

  return (
    <Container>
      {/* Esse Link é a ferramenta de redirecionamento do next */}
      <Link href="/">
        <img src="/assets/logo.svg" alt="Rocketshoes" />
      </Link>
      <Link href="/cart">
        <Cart>
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Link>
    </Container>
  )
}
export default Header
