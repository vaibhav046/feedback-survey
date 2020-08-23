import authReducer from '../../src/reducers/authReducer'
import { initialState } from '../../src/reducers/authReducer'

describe('Auth reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toMatchSnapshot()
    })

    it('should handle FETCH_USER', () => {
        expect(
            authReducer(initialState,
                {
                    type: 'FETCH_USER'
                })
        ).toMatchSnapshot()
    })
})