import { getQueryParamsAndMergeNew } from './addQueryParams'

describe('getQueryParamsAndMergeNew', () => {
    test('single param', () => {
        const res = getQueryParamsAndMergeNew({ type: '5' })
        const expected = '?type=5'

        expect(res).toBe(expected)
    })

    test('multiple param', () => {
        const res = getQueryParamsAndMergeNew({ type: '5', test: 'test' })
        const expected = '?type=5&test=test'

        expect(res).toBe(expected)
    })

    test('filter invalid params', () => {
        const res = getQueryParamsAndMergeNew({ type: '', test: undefined, correct: 'test', done: 'done1' })
        const expected = '?correct=test&done=done1'

        expect(res).toBe(expected)
    })
})
