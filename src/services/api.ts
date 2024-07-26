import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"

type Data = {
    id: number,
    name: string
}


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
        {baseUrl: ''}
    ),
    endpoints: (builder) => (
        {
            getData: builder.query<any[], void>({
                query: () => '/data'
            }),
            postData: builder.mutation(
                {
                    query: (newData) => (
                        {url: '/data', method: 'POST', body: newData}
                    )
                }
            ),
            updateData: builder.mutation<Data, Partial<Data> & { id: number }>({
                query: (
                    {
                        id,
                        ...updates
                    }
                ) => (
                    {url: `/data/${id}`, method: 'PUT', body: updates}
                )
            })
        }
    )
})
