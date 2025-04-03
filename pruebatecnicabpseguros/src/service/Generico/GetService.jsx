class GetService {
    async getService(rutaServicio, id) {
        let user = localStorage.getItem('user')
        let headers = {
            'Content-Type': 'application/json',
        }
        if (user !== undefined && user !== null && user !== '') {
            const { token } = JSON.parse(user)
            headers['Authorization'] = 'Bearer ' + token
        }

        const response = await fetch(`${rutaServicio}/${id}`, {
            method: 'GET',
            headers
        })

        const data = await response.json()
        return data
    }
}
export default GetService