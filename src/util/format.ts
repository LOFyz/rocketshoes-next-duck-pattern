// Essa função simplesmente formata um number pra um preço formatado, em reais no caso

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})
