const convert = require('./convert')

test('converts 4 to 4', () => {
    expect(convert.convert(4, 4)).toBe(16)
})

test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})

test('toMoney converts string', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})

describe('getTodayBR', () => {
    const RealDate = Date

    function mockDate(date) {
        global.Date = class extends RealDate {
            constructor() {
                return new RealDate(date)
            }
        }
    }
    afterEach(() => {
        global.Date = RealDate
    })

    test('getToday', () => {
        mockDate('2019-01-01T12:00:00z')
        const today = convert.toTodayBR()
        expect(today).toBe('1/1/2019')
    })
})