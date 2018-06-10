import { ActionTypes as types } from '../../constants/staff/staffConstants'

export function resetStaff() {
    return {
        type: types.RESET_STAFF,
        data: {
            active: {
                headOf: [],
                destination: [],
                name: [],
                jobTitle: [],
                departureArrival: [],
                a1: []
            },
            inactive: {
                recentlyInactive: [],
                archive: []
            },
            other: {
                itsdAdmin: [],
                saveConflicts: [],
                newEmployees: [],
                tuiProfileLogin: []
            }
        }
    }
}
