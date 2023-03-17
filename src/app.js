import { E } from "@/library"
import { Container } from "@/layout"

export const App = () => {
  const app = E({
    tag: 'div',
    className: 'font-sans',
    child: [],
  })
  return Container(app)
}
 
