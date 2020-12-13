import { navigate } from "gatsby"

export const runCommand = command => {
  const authorized = ["ls", "help", "pwd", "clear"]
  const notAuthorized = ["mkdir", "copy", "rm", "mv", "touch", "open"]
  if (command.startsWith("cd")) {
    navigateToDirectory(command.slice(3))
  } else if (authorized.includes(command)) {
    navigateTo(command)
  } else if (notAuthorized.includes(command.split(" ")[0])) {
    navigate(`/not-authorized`)
  } else {
    navigate(`/404`)
  }
}
const navigateToDirectory = page => {
  const home = ["..", "-", "~"]
  if (home.includes(page)) {
    navigate(`/`)
  } else {
    navigate(`/${page}/#start`)
  }
}
const navigateTo = page => {
  switch (page) {
    case "ls":
      return navigate("/table-of-contents")
    case "help":
      return navigate("/help")
    case "pwd":
      return navigate("/working-directory")
    default:
      return navigate("/")
  }
}
