import { navigate } from "gatsby"

export const runCommand = command => {
  if (command.startsWith("cd")) {
    navigateTo(command.slice(3))
  } else if (command === "ls") {
    navigate(`/table-of-contents`)
  } else if (command === "help") {
    navigate(`/help`)
  } else if (command === "pwd") {
    navigate(`/working-directory`)
  } else if (command === "clear") {
    navigate(`/`)
  } else if (
    command.startsWith("mkdir") ||
    command.startsWith("copy") ||
    command.startsWith("rm") ||
    command.startsWith("mv") ||
    command.startsWith("touch") ||
    command.startsWith("open")
  ) {
    navigate(`/not-authorized`)
  } else {
    navigate(`/404`)
  }
}
const navigateTo = page => {
  const home = ["..", "-", "~"]
  if (home.includes(page)) {
    navigate(`/`)
  } else {
    navigate(`/${page}/#start`)
  }
}
