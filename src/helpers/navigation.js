import { navigate } from "gatsby"

export const runCommand = command => {
  if (command.startsWith("cd")) {
    navigateTo(command.slice(3))
  } else if (command === "ls") {
  } else if (command === "help") {
  } else if (command === "pwd") {
  }
}
const navigateTo = page => {
  if (page === "..") {
    navigate(`/`)
  } else {
    navigate(`/${page}/#start`)
  }
}
const reset = () => {}
const showListOfCommands = () => {}
const showHelp = () => {}
