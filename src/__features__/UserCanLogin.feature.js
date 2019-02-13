require('../__mocks__/mocks')

describe('User attempts to login', () => {

  beforeAll(async () => {
    jest.setTimeout(10000)
    await page.goto(appURL);

  });

  beforeEach(async () => {
    await page.reload();
  })


  describe('with valid', async () => {
    it('credentials', async () => {
      await page.click('#login')
      await page.type('input[id="email"]', 'johndoe@mail.com')
      await page.type('input[id="password"]', 'password')
      await page.click('button[id="submit"]')
      await expect(page).toMatch('Hi johndoe@mail.com')
    })

  })

  describe('with invalid', async () => {
    xit('credentials', async () => {
      await page.click('#login')
      await page.type('input[id="email"]', 'wrongjohndoe@mail.com')
      await page.type('input[id="password"]', 'wronpassword')
      await page.click('button[id="submit"]')
      await expect(page).toMatch('Wrong email')
    })
  })
})
