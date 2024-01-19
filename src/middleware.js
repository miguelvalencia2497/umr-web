import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req) {

 //?? Ignore redirect of publicly served files
 if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/logo-uhr.svg',
      '/logo-uhr-admin.svg',
      '/bg-login.png',
      './icon-avatar.svg',
      './icon-add-multiple.svg',
      '/icon-close.svg',
      '/icon-deactivate.svg',
      '/icon-delete.svg',
      '/icon-email.svg',
      '/icon-filter.svg',
      '/icon-positive.svg',
      '/icon-search.svg',
      '/icon-negative.svg',
      '/icon-notification-unread.svg',
      '/icon-warning.svg',
      '/logo-nav.png',
      '/menu-burger.svg',
      '/nav-admin-dashboard.svg',
      '/nav-admin-users_and_groups.svg',
      '/nav-admin-patients.svg',
      '/nav-admin-notification.svg',
      '/nav-admin-reports.svg',
      '/nav-divider.svg',
      '/nav-tail.png',
      '/card-consultation.png',
      '/card-faq.png',
      '/card-followup.png',
      '/card-dependents.png',
      '/card-medication.png',
      '/card-payment.png',
      '/card-privacy.png',
      '/card-qr.png',
    ].includes(req.nextUrl.pathname)
  ) return

  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

    // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}