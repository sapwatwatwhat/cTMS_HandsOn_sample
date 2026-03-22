const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('AdminService OData APIs', () => {

  it('serves AdminService.Authors', async () => {
    const { data } = await GET `/odata/v4/admin/Authors ${{ params: { $select: 'ID,name' } }}`
    expect(data.value).to.containSubset([
      {"ID":"15654794-3a09-4c8a-a876-0c5bc2b5dd67","name":"name-15654794"},
    ])
  })

})
