import React, { useState } from 'react'
import { ChevronDown, University,  } from 'lucide-react'
import menuItems from './menuItems';


const Sidebar = ({collapsed, onToggle, currentPage, onPageChange}) => {

  const [expendedItems , setExpendedItems ] = useState(new Set([]));


  const toggleExpended = (itemId) => {
    const newExpended = new Set(expendedItems);

    if(newExpended.has(itemId)){
      newExpended.delete(itemId);
    }else{
      newExpended.add(itemId);
    }

    setExpendedItems(newExpended)
  }


  return (
    <div className={`${collapsed ? "w-20" : "w-72"} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 
      backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10 h-screen`}>
      
      {/* Logo */}
      <div className='p-4 border-b border-slate-200/50 dark:border-slate-700/50'>
        {/* text logo */}
        <div className='flex items-center space-x-3'>
          <div className='h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center shadow-lg'>
            <University className='w-5 h-5 text-white'/>
          </div>
          { !collapsed && (
            <div>
              <h2 className='text-xl font-bold text-slate-800 dark:text-white'>Collage</h2>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
            </div>
          )}
        </div>

        {/* image logo  */}
       {/* <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center">
            <img
              src="/assets/logo/logo.png"
              alt="logo"
              className="h-10 w-auto"
            />
          </div>
        </div> */}
      </div>



      {/* Navigation (fills space) */}
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
        {menuItems.map((item) => {
          return(
            <div key={item.id}>
              <button className={`w-full flex items-center justify-between p-3 rounded-md transition-all duration-200 ${currentPage === item.id || item.active ? 
                "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : 
                "text-slate-600 dark:text-slate-300 hover:bg-slate-100  dark:hover:bg-slate-800/50" 
              }`} onClick={()=> {
                if(item.submenu){
                  toggleExpended(item.id)
                }else{
                  onPageChange(item.id)
                }
              }}>
                
                  <div className='flex items-center justify-between'>
                     <item.icon className={`w-5 h-5`} />

                     <>
                       {!collapsed && ( <span className='font-medium ml-2'>{item.label}
                         { item.badge && ( 
                          <span className='py-1 px-2 text-xs bg-red-500 text-white rounded-full'>
                            {item.badge}
                          </span>
                        )}


                        {item.count && (
                          <span className='py-1 px-2 text-xs bg-slate-200 dark:bg-slate-700
                         text-slate-600 dark:text-slate-300 rounded-full '>
                          {item.count}
                         </span>)
                         }
                       </span>)}
                     </>
                  </div>
                  {/* dropdwon icon */}
                  {!collapsed && item.submenu && ( <ChevronDown className={`w-4 h-4 transition-transform`}/>)}
              </button>

              {/* submenues  */}
              {!collapsed && item.submenu && expendedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subitem) => {
                    return <button className='w-full text-left p-2 test-sm text-slate-600 dark:text-slate-400
                    hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-md transition-all' 
                    key={subitem.id}>{subitem.label}</button>;

                  })}
                </div>
              )}



          </div>
          )
        })}
      </nav>



      {/* User profile (sticks to bottom) */}
      { !collapsed && (
        <div className='px-4 py-2 border-t border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex items-center space-x-3 p-1 rounded-s'>
            <img 
              src='https://i.pravatar.cc/150?u=user7'
              alt="user-image"
              className='w-10 h-10 rounded-full ring-2 ring-blue-500'
            />
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>
                Abu Huzaifa
              </p>
              <p className='text-xs text-slate-400 dark:text-slate-500 truncate'>
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar