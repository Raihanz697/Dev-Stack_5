

Project Name: Dev Stack

A little description: A modern and interactive React application for exploring different technologies and building  technology stack. Users can add technologies to their stack, remove individual items, or clear the entire stack with simple and responsive interactions.

Technology that I use:
1.React.js
2.Tailwind CSS, DaisyUI,googlefont,react icon
3.TypeScript / JavaScript (ES6+)
4.React-Toastify 
5.JSON 
6.Vite


3 features about your project:
i.Browse Technologies — View available technologies loaded dynamically from JSON data.
ii.Build Your Stack — Add your favorite technologies to your personal stack and prevent duplicate entries.
iii.Manage Your Stack — Remove individual technologies or clear the entire stack with one click.




i. What is JSX, and why is it used in React?

Ans:JSX lets us write HTML-like code inside JavaScript.It makes React code easier to write and understand.

ii.What is the difference between props and state?

Ans:Props are used to send data from a parent component to a child component.State is used to store data that can change in a component.

iii.What does the useState hook do, and where did you use it in this project?

Ans:useState is used to create and change data in a React component.I used it to store the technology stack:

const [stack, setStack] = useState<Icard[]>([]);

iv.What does the useEffect hook do, and why did you need it to load the JSON data?

Ans:useEffect is used to run some code after a component loads or updates.I did not use useEffect in this project.I used fetch() to get the JSON data and Suspense to handle the loading.

v.Why does every item in a .map() list need a unique key prop?

Ans:The key helps React know which item is which.It helps React update the list correctly when an item is added, removed, or changed.

vi.What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans:Conditional rendering means showing something only when a condition is true.

if (isAlreadyAdded) {
      toast.warning(`${card.name} Already added!`);
      return;
    }

vii.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans:A parent sends data to a child using props.A child can send something back by calling a function that the parent passes as a prop.
