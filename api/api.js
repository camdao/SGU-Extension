async function apiRequest({ url, method = 'GET', body = null }) {
    const authToken = sessionStorage.getItem('CURRENT_USER');
    if (!authToken) throw new Error('Chưa đăng nhập');

    const { access_token } = JSON.parse(authToken);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
    };

    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Lỗi mạng: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

function fetchStudyList() {
    const payload = {
        is_CVHT: false,
        additional: {
            paging: { limit: 99999, page: 1 },
            ordering: [{ name: "", order_type: "" }]
        }
    };
    return apiRequest({ url: '/api/dkmh/w-locdsnhomto', method: 'POST', body: payload });
}
