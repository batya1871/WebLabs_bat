# Лабораторная работа №1
## Батиевский В.В.
### Задачи
1.	IP адрес веб сервера
2.	порт к которому вы обращаетесь
3.	истинное значение хоста ресурса
4.	информация о необходимости кэширования
5.	данные о формате данных которые содержатся в теле ответа
6.	код ответа и его значение
7.	протокол по которому осуществлялся запрос
8.	прочая важная информация содержащаяся в заголовке (копайте глубже и найдёте гематоген золото)

Получал данные по адресу https://www.youtube.com
Использовал команду: 
curl -I -v https://www.youtube.com

### Ответы
1)	64.233.165.198
2)	443
3)	 www.youtube.com
4)	Кеш не хранится - no-cache, no-store, max-age=0, must-revalidate
5)	Текст - text/html; charset=utf-8
6)	200 – успешный код-ответ
7)	HTTP


### Весь код:

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 64.233.165.198:443...
* Connected to www.youtube.com (64.233.165.198) port 443 (#0)
* ALPN: offers h2
* ALPN: offers http/1.1
*  CAfile: C:/▒▒▒▒▒▒▒▒▒/Git/mingw64/ssl/certs/ca-bundle.crt
*  CApath: none
} [5 bytes data]
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
} [512 bytes data]
* TLSv1.3 (IN), TLS handshake, Server hello (2):
{ [122 bytes data]
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
{ [15 bytes data]
* TLSv1.3 (IN), TLS handshake, Certificate (11):
{ [6410 bytes data]
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
{ [80 bytes data]
* TLSv1.3 (IN), TLS handshake, Finished (20):
{ [52 bytes data]
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
} [1 bytes data]
* TLSv1.3 (OUT), TLS handshake, Finished (20):
} [52 bytes data]
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
* ALPN: server accepted h2
* Server certificate:
*  subject: CN=*.google.com
*  start date: Aug 22 08:22:36 2022 GMT
*  expire date: Nov 14 08:22:35 2022 GMT
*  subjectAltName: host "www.youtube.com" matched cert's "*.youtube.com"
*  issuer: C=US; O=Google Trust Services LLC; CN=GTS CA 1C3
*  SSL certificate verify ok.
* Using HTTP2, server supports multiplexing
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
} [5 bytes data]
* h2h3 [:method: HEAD]
* h2h3 [:path: /]
* h2h3 [:scheme: https]
* h2h3 [:authority: www.youtube.com]
* h2h3 [user-agent: curl/7.84.0]
* h2h3 [accept: */*]
* Using Stream ID: 1 (easy handle 0x1eec8a40d60)
} [5 bytes data]
> HEAD / HTTP/2
> Host: www.youtube.com
> user-agent: curl/7.84.0
> accept: */*
>
{ [5 bytes data]
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
{ [282 bytes data]
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
{ [282 bytes data]
* old SSL session ID is stale, removing
{ [5 bytes data]
< HTTP/2 200
< content-type: text/html; charset=utf-8
< x-content-type-options: nosniff
< cache-control: no-cache, no-store, max-age=0, must-revalidate
< pragma: no-cache
< expires: Mon, 01 Jan 1990 00:00:00 GMT
< date: Fri, 09 Sep 2022 08:11:43 GMT
< content-length: 664325
< strict-transport-security: max-age=31536000
< x-frame-options: SAMEORIGIN
< cross-origin-opener-policy-report-only: same-origin-allow-popups; report-to="youtube_main"
< permissions-policy: ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-platform=*, ch-ua-platform-version=*
< report-to: {"group":"youtube_main","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/youtube_main"}]}
< p3p: CP="This is not a P3P policy! See http://support.google.com/accounts/answer/151657?hl=ru for more info."
< server: ESF
< x-xss-protection: 0
< set-cookie: GPS=1; Domain=.youtube.com; Expires=Fri, 09-Sep-2022 08:41:44 GMT; Path=/; Secure; HttpOnly
< set-cookie: YSC=-P2nZhcOIiE; Domain=.youtube.com; Path=/; Secure; HttpOnly; SameSite=none
< set-cookie: VISITOR_INFO1_LIVE=H-Oo8BgDHfc; Domain=.youtube.com; Expires=Wed, 08-Mar-2023 08:11:44 GMT; Path=/; Secure; HttpOnly; SameSite=none
< alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"
<
  0  648k    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0HTTP/2 200
content-type: text/html; charset=utf-8
x-content-type-options: nosniff
cache-control: no-cache, no-store, max-age=0, must-revalidate
pragma: no-cache
expires: Mon, 01 Jan 1990 00:00:00 GMT
date: Fri, 09 Sep 2022 08:11:43 GMT
content-length: 664325
strict-transport-security: max-age=31536000
x-frame-options: SAMEORIGIN
cross-origin-opener-policy-report-only: same-origin-allow-popups; report-to="youtube_main"
permissions-policy: ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-platform=*, ch-ua-platform-version=*
report-to: {"group":"youtube_main","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/youtube_main"}]}
p3p: CP="This is not a P3P policy! See http://support.google.com/accounts/answer/151657?hl=ru for more info."
server: ESF
x-xss-protection: 0
set-cookie: GPS=1; Domain=.youtube.com; Expires=Fri, 09-Sep-2022 08:41:44 GMT; Path=/; Secure; HttpOnly
set-cookie: YSC=-P2nZhcOIiE; Domain=.youtube.com; Path=/; Secure; HttpOnly; SameSite=none
set-cookie: VISITOR_INFO1_LIVE=H-Oo8BgDHfc; Domain=.youtube.com; Expires=Wed, 08-Mar-2023 08:11:44 GMT; Path=/; Secure; HttpOnly; SameSite=none
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"


* Connection #0 to host www.youtube.com left intact

 
