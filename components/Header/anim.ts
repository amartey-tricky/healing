export const menuSlide = {
  initial: {x: "calc(100%+100px)"},
  enter: {x: "0", transition: {duration: 1, ease: [0.37, 0, 0.63, 1]}},
  exit: {x: "calc(100%+100px)", transition: {duration: 1, ease: [0.37, 0, 0.63, 1]}}
}

export const slide = {
  initial: {x: 80},
  enter: (i: number) => ({x: 0, transition: {duration: 1, ease: [0.37, 0, 0.63, 1]}, delay: 0.05 * i}),
  exit: (i: number) => ({x: 80, transition: {duration: 1, ease: [0.37, 0, 0.63, 1]}, delay: 0.05 * i})
}

export const scale = {
  open: {scale: 1, transition: {duration: 0.5}},
  close: {scale: 0, transition: {duration: 0.6}}
}