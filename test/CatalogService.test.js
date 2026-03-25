const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data } = await GET `/odata/v4/catalog/ListOfBooks ${{ params: { $select: 'ID,author' } }}`
    expect(data.value).to.containSubset([
      {"ID":"24927405-ed68-4e98-aa54-553d8996e17a","author":"author-24927405"},
    ])
  })

  it('executes submitOrder', async () => {
    const { data } = await POST `/odata/v4/catalog/submitOrder ${
      {"book":"18821000-144b-478f-9834-ba10a13abe21","quantity":65}
    }`
    // TODO finish this test
    // expect(data.value).to...
  })
})
