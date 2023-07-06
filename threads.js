const API_URL = "https://www.threads.net/api/graphql";
const AJAX_URL = "https://www.threads.net/ajax/bulk-route-definitions";

async function getThreadsProfile(handle) {
  const userId = await getIdFromHandle(handle)
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": "cb=1_2023_07_06_",
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9",
      "Origin": "https://www.threads.net",
      "Referer": "https://www.threads.net/@nikitabier",
      "Sec-Ch-Prefers-Color-Scheme": "dark",
      "Sec-Ch-Ua": "Not.A/Brand;v=8, Chromium;v=114",
      "Sec-Ch-Ua-Full-Version-List": "Not.A/Brand;v=8.0.0.0, Chromium;v=114.0.5735.198",
      "Sec-Ch-Ua-Mobile": "?0",
      "Sec-Ch-Ua-Platform": "Linux",
      "Sec-Ch-Ua-Platform-Version": "6.3.9",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      "Viewport-Width": "1198",
      "X-Asbd-Id": "129477",
      "X-Fb-Friendly-Name": "BarcelonaProfileRootQuery",
      "X-Fb-Lsd": "LFEwwEJ6qDWEUM-79Hlmgq",
      "X-Ig-App-Id": "238260118697367"
    },
    credentials: "include",
    body: `av=0&__user=0&__a=1&__req=1&__hs=19544.HYP%3Abarcelona_web_pkg.2.1..0.0&dpr=1&__ccg=UNKNOWN&__rev=1007796220&__s=lmyr8y%3At9v7zr%3Advu3ss&__hsi=7252689782200078640&__dyn=7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE465o-cw5Mx62G3i0Bo7O2l0Fwqo31wnEfovwRwlE-U2zxe2Gew9O22362W2K0zK5o4q0GpovU1aUbodEGdwtU2ewbS1LwTwNwLw8O1pwr82gxC&__csr=sAmjlBrCg016kA7ofA11xS03F-3N0aqq4ErOwD2i63V34jxT4yoy48txo82yx1wt5y8KidOwDwKUNph1ES4ogxcm0J8hwogAb8b2n1Y0xo5h0gQcg3tDhayGxVgMo4o0wC0wc23a9zggw&__comet_req=29&lsd=LFEwwEJ6qDWEUM-79Hlmgq&jazoest=21811&__spin_r=1007796220&__spin_b=trunk&__spin_t=1688648430&__jssesw=2&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=BarcelonaProfileRootQuery&variables=%7B%22userID%22%3A%22${userId}%22%7D&server_timestamps=true&doc_id=23996318473300828`
  });
  try {
    const json = await response.json()
    if(json.data.userData) {
      return json.data.userData.user
    }
  } catch(e) {
    console.error(e)
  }
}

async function getIdFromHandle(handle) {
  try {
    const body = `route_urls[0]=%2F%40${handle}&routing_namespace=barcelona_web&__user=0&__a=1&__req=3&__hs=19544.HYP%3Abarcelona_web_pkg.2.1..0.0&dpr=1&__ccg=UNKNOWN&__rev=1007796220&__s=gq820m%3A5v3kcq%3A8jl1xc&__hsi=7252700623360566289&__dyn=7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE465o-cw5Mx62G3i0Bo7O2l0Fwqo31wnEfovwRwlE-U2zxe2Gew9O22362W2K0zK5o4q0GpovU1aUbodEGdwtU2ewbS1LwTwNwLw8O1pwr82gxC&__csr=sAmjlBrCg016kA7ofA11xS03F-3N0aqq4ErOwD2i63V34jxT4yoy48txo82yx1wt5y8KidOwDwKUNph1ES4ogxcm0J8hwogAb8b2n1Y0xo5h0gQcg3tDhayGxVgMo4o0wC0wc23a9zggw&__comet_req=29&lsd=R-hc0Ljq9ECJBg2HKvMaiI&jazoest=21776&__spin_r=1007796220&__spin_b=trunk&__spin_t=1688650954&__jssesw=1`
    const response = await fetch(AJAX_URL, {
      method: "POST",
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": "cb=1_2023_07_06_",
        "Origin": "https://www.threads.net",
        "Referer": "https://www.threads.net/@nikitabier",
        "Sec-Ch-Prefers-Color-Scheme": "dark",
        "Sec-Ch-Ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\"",
        "Sec-Ch-Ua-Full-Version-List": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.198\"",
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": "\"Linux\"",
        "Sec-Ch-Ua-Platform-Version": "\"6.3.9\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "Viewport-Width": "1198",
        "X-Asbd-Id": "129477",
        "X-Fb-Lsd": "R-hc0Ljq9ECJBg2HKvMaiI"
      },
      credentials: "include",
      body
    })
    const data = await response.text();
    const parsed = JSON.parse(data.slice(9))
    return Object.values(parsed.payload.payloads)[0].result.exports.rootView.props.user_id
  } catch(e) {
    console.error(e)
  }
}


module.exports = {
  getThreadsProfile
}
