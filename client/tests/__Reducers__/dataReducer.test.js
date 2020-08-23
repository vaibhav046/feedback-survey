import dataReducer from '../../src/reducers/dataReducer'
import { initialState } from '../../src/reducers/dataReducer'

describe('Data reducer', () => {
    it('should return the initial state', () => {
        expect(dataReducer(undefined, {})).toMatchSnapshot()
    })

    it('should handle FETCH_SURVEY', () => {
        expect(
            dataReducer(initialState,
                {
                    type: 'FETCH_SURVEY'
                })
        ).toMatchSnapshot()
    })
})