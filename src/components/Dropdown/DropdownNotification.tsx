import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownNotification() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 border-none outline-none  px-1 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.963"
      height="23.963"
      viewBox="0 0 23.963 23.963"
    >
      <defs>
        <clipPath id="clip-path">
          <path d="M0 0h23.963v23.963H0z" data-name="Path 23126"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#clip-path)">
        <g clipPath="url(#clip-path)" data-name="Group 18099">
          <path
            d="M99.249 53.741l-1.717-3.434a.8.8 0 01-.1-.408v-2.657a6.038 6.038 0 00-5.061-5.942v-1.213a1 1 0 00-2 0V41.3a6.038 6.038 0 00-5.061 5.939V49.9a.8.8 0 01-.1.408l-1.71 3.433a1 1 0 00.888 1.449h13.973a1 1 0 00.888-1.449zm-6.878 2.945h-4.143a3.229 3.229 0 006.289 0z"
            data-name="Path 23123"
            transform="translate(-79.391 -37.216)"
          ></path>
        </g>
      </g>
    </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Messages
                </a>
              )}
            </Menu.Item>
            
            
            
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Other Notification
                  </button>
                )}
              </Menu.Item>
  
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
