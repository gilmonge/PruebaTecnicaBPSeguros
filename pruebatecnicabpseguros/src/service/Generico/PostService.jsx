class PostService {
    async postService(rutaServicio, datos) {
        let user = localStorage.getItem('user')
        let headers = {
            'Content-Type': 'application/json',
        }
        if (user !== undefined && user !== null && user !== '') {
            const { token } = JSON.parse(user)
            headers['Authorization'] = 'Bearer ' + token
        }

        const response = await fetch(rutaServicio, {
            method: 'POST',
            headers,
            body: JSON.stringify(datos)
        })

        const data = await response.json()
        return data
    }
}
export default PostService