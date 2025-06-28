// Code your solution here
const drivers  = [
 {
    "name": "Bob",
    "hometown": "big boy hometown"
 },
  {
    "name": "Teressa",
    "hometown": "big boy hometown"
 },
  {
    "name": "Kate",
    "hometown": "small boy hometown"
 },
  {
    "name": "Andy",
    "hometown": "hometown pending"
 },
]

const findMatching = (drivers, value) => {
    return drivers.filter(item => item.toLowerCase() === value.toLowerCase())
}

const fuzzyMatch = (drivers, value) => {
    const lower = value.toLowerCase()
    return drivers.filter(item => item.toLowerCase().startsWith(lower))
}

const matchName = (drivers, value) => {
    const lower = value.toLowerCase()
    return drivers.filter(item => item.name.toLowerCase() === lower)
}
