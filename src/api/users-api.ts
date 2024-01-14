import {instance, APIResponseType} from "./api";
import {UserType} from "../types/types";

type GetUsersResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<APIResponseType>(`follow/${userId}`).then(res => res.data)
    }
};