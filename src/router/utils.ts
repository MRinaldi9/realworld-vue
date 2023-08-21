export function createRouteProfile(profileName: string) {
  if (profileName.includes('-')) return profileName

  const splittedNameProfile = profileName.split(' ').map(word => word.toLowerCase())
  return splittedNameProfile.length === 1 ? splittedNameProfile[0] : splittedNameProfile.join('-')
}
