describe('API Testing - User Management', () => {
  
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  it('POST - validate login endpoint simulation', () => {
  cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts', // Usando como mock
    body: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  }).then((response) => {
    expect(response.status).to.eq(201)
  })
})

  it('GET - should validate the users list structure', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users`,
    }).then((response) => {
      // Validações Técnicas
      expect(response.status).to.eq(200)
      expect(response.duration).to.be.lessThan(1000) // Performance: abaixo de 1s
      
      // Validação de Dados
      expect(response.body).to.be.an('array')
      expect(response.body[0]).to.have.property('id')
      expect(response.body[0].address).to.have.property('geo')
    })
  })

  it('POST - should create a new post and validate contract', () => {
    const newPost = {
      title: 'Automated Test by Gustavo',
      body: 'Demonstrating API skills with Cypress',
      userId: 1
    }

    cy.request({
      method: 'POST',
      url: `${baseUrl}/posts`,
      body: newPost
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.title).to.eq(newPost.title)
      expect(response.body).to.have.property('id')
    })
  })
})