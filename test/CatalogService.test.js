const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data } = await GET `/odata/v4/catalog/ListOfBooks ${{ params: { $select: 'ID,author' } }}`
    expect(data.value).to.containSubset([
      {"ID":"18149868-5bff-4f24-818f-6b12596f49bb","author":"author-18149868"},
    ])
  })

  it('executes submitOrder', async () => {
    const { data } = await POST `/odata/v4/catalog/submitOrder ${
      {"book":"37630386-9de0-469a-8cc5-0f60841e8969","quantity":38}
    }`
    // TODO finish this test
    // expect(data.value).to...
  })
})
