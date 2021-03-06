import * as Utils from '../../../../app/components/utils'

describe('math: getFadeOutOffset, return start index, number', () => {
  it('should return default data', () => {
    const data = Utils.getFadeOutOffset()
    expect(data).toEqual(0)
  })

  it('should return expected data if itemIndex less currentIndex and case 1', () => {
    const data = Utils.getFadeOutOffset(0, 1)
    expect(data).toEqual(0)
  })

  it('should return expected data if itemIndex less currentIndex and case 2', () => {
    const data = Utils.getFadeOutOffset(0, 1, 100)
    expect(data).toEqual(-100)
  })

  it('should return expected data if itemIndex not less currentIndex and case 1', () => {
    const data = Utils.getFadeOutOffset(1, 0, 100)
    expect(data).toEqual(100)
  })

  it('should return expected data if itemIndex not less currentIndex and case 2', () => {
    const data = Utils.getFadeOutOffset(0, 0, 100)
    expect(data).toEqual(0)
  })

  it('should return expected data if itemIndex not less currentIndex and case 3', () => {
    const data = Utils.getFadeOutOffset(0, 2, 100)
    expect(data).toEqual(-200)
  })

  it('should return expected data if itemIndex not less currentIndex and case 4', () => {
    const data = Utils.getFadeOutOffset(0, -1, 100)
    expect(data).toEqual(100)
  })
})
