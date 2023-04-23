# <h1 id="QuickConnect"> QuickConnect  </h1>
### QuickConnect, a platform which help for communicating the workers and peoples/recruiters
QuickConnect, here recruiter/peoples can recruite/contract the workers in according to their work performances, experience and peoples work demands, here peoples can filtering the workers on the basis of their ratings, comments or work expereinces. Also workers can create their portfolio to browsing works, also have many features we provide( like denied peoples request, can send request for recruiting, or more). 


## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#demos" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#docs" >Documentation</a></p>
####   <p><a href="#features" >Features</a></p>
####   <p><a href="#auths" >Contributers / Authors</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/QuickConnect?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/QuickConnect?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/QuickConnect)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/QuickConnect?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/QuickConnect) 

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/QuickConnect)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/QuickConnect)

## <h2 id="demos" >Demo </h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/232263677-e2fe9be2-23c5-4255-a9b1-42ea1abb84eb.gif" width="500"   alt="QuickConnect_home"/>      
</p> 

<a href="#QuickConnect">Go Home </a>


## <h2 id="stack" >Tech Stack </h2>


**Client:** React, Bootstrap


<a href="#QuickConnect">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

Clone the project

```bash
  git clone https://github/Nik4Furi/QuickConnect
```

Go to the project directory

```bash
  cd QuickConnect/Frontend
```

Install Dependies

```bash
  npm install
```
OR 

```bash
  yarn
```

Start Development

```bash
  npm start
```
OR

```bash
  yarn start
```

<a href="#QuickConnect">Go Home </a>


## <h2 id="docs">Documentation </h2>

####   <p><a href="#classes" > Special Types Classes</a></p>
####   <p><a href="#fontsRef" >Fonts References</a></p>
####   <p><a href="#colRef" >Color References</a></p>
####   <p><a href="#routesRef" >Routers/Pages </a></p>
####   <p><a href="#usageRef" >Usage/Examples Components</a></p>

### <h2 id="classes">Special Types Classes </h2>

We are discussing our special types of classes

Highlighting for special content, text or headings

```css
.text-highlight{
  font-weight: bold;
  color: var(--main-col);
  font-family: 'Roboto', sans-serif;
}
```
<a href="#QuickConnect">Go Home </a>


### <h2 id="fontsRef">Fonts References </h2>

We are using two types of fonts

|     Font Family   |    Font     |   Description                   |
| ----------------- | ------------ |  ----------------------------------------------------- |
| f-1  |  'Roboto', sans-serif | Used for special text/heading, and highlighting a content |
| f-2  |  'Sofia Sans', sans-serif | Used for all overs(by default use) like paragraphs etc.. |

<a href="#QuickConnect">Go Home </a>


### <h2 id="colRef">Color References </h2>

|       Color       |    Hex     |           Description                        |
| ----------------- | ----------- | ------------------------------------------- |
| --main-col  	 |  ![ #832D83](https://via.placeholder.com/10/832D83?text=+)  #832D83 | Used for text-highlighting, and special types of text/content |
|  --main-col-hover  	 |  ![ #5d1a5d](https://via.placeholder.com/10/5d1a5d?text=+)  #5d1a5d   | Used for hovering a text |
|  --main-bg-primary |  ![ #fffaff](https://via.placeholder.com/10/fffaff?text=+)  #fffaff   | Our primary background color, we use in *buttons, backgrounds tint* |
|  --main-bg-secondary  |  ![ #d2c4d2 ](https://via.placeholder.com/10/d2c4d2?text=+)  #d2c4d2  | Our secondary background color |

<a href="#QuickConnect">Go Home </a>


### <h2 id="routesRef">Routes / Pages </h2>

GET Specific Stuff

| Routes   | Parameter    |   Type     |           Description                |

| :--------     | :-------  | :-------     | :------------------------- |

| `/` | - | `get` | Home Page |

<a href="#QuickConnect">Go Home </a>


### <h2 id="usageRef">Usage/Examples Components </h2>

Home Page, Use this components for developing into differents sections

```javascript

//Styles for specific home page
import '../styles/Home.modules.css' 

// Importing Components
import ServicesCard from '../components/Home/ServicesCard'
import Testimonials from '../components/Home/Testimonials'
import RoadMapCard from '../components/Home/RoadMapCard'
import ContactUs from '../components/Home/ContactUs'

<ServicesCard img={"/images/services/service1.jpg"} service={"Kitching"} content={"More you can create"} /> //Services Section

<Testimonials review={"Hello everyone, when i thinking about this paltform, first of all i amazed becuase this platform make my carrer, give me the jobs which i want and deserve"} name={"Chectan Prakash"} /> //Testimonials Section

<RoadMapCard img={"/images/roadmaps/roadmap1.png"} content={"1.Register account to begin applying"} /> //Roadmaps Section

<ContactUs /> //Contact Us Section

```

<a href="#QuickConnect">Go Home </a>


## <h2 id="features">Features </h2>

- *Communication platform of workers and recruiters/peoples
- *Can filtering the best fit workers
- *Dark/Light Mode

<a href="#QuickConnect">Go Home </a>

## <h2 id="auths">Contributers / Authors  </h2>

- **[@manoj]**(https://www.github.com/manojvaishnav)
- **[@pragti]**(https://www.github.com/Pragati12981)
- **[@pankaj]**(https://github.com/pankaj7073)
- **[@nikhil]**(https://www.github.com/Nik4Furi)

<a href="#QuickConnect">Go Home </a>