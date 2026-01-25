import {Routes,Route} from 'react-router-dom'
import {lazy,Suspense} from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
const Home=lazy(()=>import('./pages/Home'))
const Dashboard=lazy(()=>import('./pages/Dashboard'))
const ApplyService=lazy(()=>import('./pages/ApplyService'))
const Services=lazy(()=>import('./pages/Services'))
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/apply-service"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ApplyService />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Services/>
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App
