import React, { useContext } from "react";
import { Theme } from "../../Context/DarkMode";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
    var { theme } = useContext(Theme)
    return (
        <footer className={`${theme === "light" ? "bg-white" : "bg-black"}`}>
            <div className="container relative">
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-50 -top-7 left-1/2 w-[51px] h-[51px]">
                    <circle cx="25.5" cy="25.5" r="25.5" fill={`${theme === "light" ? "white" : "black"}`} />
                    <path d="M49.8668 25.4C49.8668 38.7834 38.9362 49.6711 25.5001 49.6711C12.064 49.6711 1.13343 38.7834 1.13343 25.4C1.13343 12.0166 12.064 1.12889 25.5001 1.12889C38.9362 1.12889 49.8668 12.0166 49.8668 25.4ZM51 25.4C51 11.43 39.525 -5.01588e-07 25.5 -1.11464e-06C11.475 -1.72769e-06 -4.99621e-07 11.43 -1.11027e-06 25.4C-1.72092e-06 39.37 11.475 50.8 25.5 50.8C39.525 50.8 51 39.37 51 25.4Z" fill="#EAB665" />
                    <path d="M25.4999 14.1113C25.8114 14.1113 26.0668 14.3653 26.0668 14.6759L26.0668 36.1248C26.0668 36.4351 25.8118 36.6894 25.4999 36.6894C25.1885 36.6894 24.9331 36.4355 24.9331 36.1248L24.9331 14.6759C24.9331 14.3653 25.1885 14.1113 25.4999 14.1113Z" fill="#EAB665" />
                    <path d="M25.0983 14.2766C24.8777 14.4963 24.8777 14.855 25.0983 15.0747L31.7329 21.6833C31.9535 21.903 32.3136 21.903 32.5342 21.6833C32.7547 21.4636 32.7547 21.1049 32.5342 20.8852L25.8995 14.2766C25.6793 14.0569 25.3185 14.0569 25.0983 14.2766Z" fill="#EAB665" />
                    <path d="M25.9007 14.2766C25.6802 14.0569 25.3201 14.0569 25.0995 14.2766L18.4649 20.8848C18.2443 21.1045 18.2443 21.4632 18.4649 21.6829C18.6854 21.9026 19.0455 21.9026 19.2661 21.6829L25.9007 15.0747C26.1213 14.855 26.1213 14.4959 25.9007 14.2766Z" fill="#EAB665" />
                </svg>
                <div className="flex lg:flex-row justify-between items-center gap-3 lg:gap-0 flex-col w-full pt-5">
                    <div className="flex flex-row gap-2 w-full lg:w-1/3">
                        <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0718 0H4.19157C3.08006 0.000849305 2.01436 0.442699 1.22854 1.22854C0.442726 2.01436 0.000869689 3.08 0 4.19157V24.7255C0.000849305 25.837 0.442699 26.9027 1.22854 27.6885C2.01436 28.4743 3.08 28.9162 4.19157 28.917H14.0718C15.1833 28.9162 16.249 28.4743 17.0348 27.6885C17.8206 26.9027 18.2625 25.837 18.2634 24.7255V4.19157C18.2625 3.08006 17.8207 2.01436 17.0348 1.22854C16.249 0.442726 15.1834 0.000869689 14.0718 0V0ZM16.7413 24.7258C16.7396 25.4333 16.4579 26.1114 15.9576 26.6117C15.4574 27.1119 14.7792 27.3937 14.0718 27.3954H4.19157C3.48408 27.3937 2.80594 27.1119 2.30571 26.6117C1.80547 26.1114 1.52369 25.4332 1.52201 24.7258V4.1919C1.52371 3.48441 1.80546 2.80627 2.30571 2.30603C2.80595 1.8058 3.48414 1.52402 4.19157 1.52234H14.0718C14.7793 1.52403 15.4574 1.80579 15.9576 2.30603C16.4579 2.80628 16.7397 3.48446 16.7413 4.1919V24.7258Z" fill="#D48A5C" />
                            <path d="M10.6533 24.3513C10.6533 25.1919 9.97194 25.8733 9.13133 25.8733C8.29072 25.8733 7.60938 25.1919 7.60938 24.3513C7.60938 23.5107 8.29072 22.8293 9.13133 22.8293C9.97194 22.8293 10.6533 23.5107 10.6533 24.3513Z" fill="#D48A5C" />
                        </svg>
                        <span className="font-semibold">
                            Phone:
                            <span className=" font-light ml-2">
                                +88019 339 702 520
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row gap-2 w-full lg:w-1/3">
                        <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3625 31.815C11.0511 31.815 10.7533 31.6874 10.5387 31.4617C10.1126 31.0083 0 20.2651 0 11.3626C0.0397244 8.36153 1.24965 5.49444 3.37193 3.37193C5.49416 1.2497 8.36142 0.0397687 11.3626 0C14.3636 0.0397244 17.2307 1.24965 19.3533 3.37193C21.4755 5.49416 22.6854 8.36142 22.7252 11.3626C22.7252 20.2651 12.6126 31.0083 12.1865 31.4617C11.9719 31.6874 11.6741 31.815 11.3627 31.815H11.3625ZM11.3625 2.27254C8.96147 2.30428 6.6679 3.27233 4.96995 4.96999C3.27222 6.66794 2.3042 8.96152 2.2725 11.3625C2.2725 17.9823 8.98204 26.2542 11.3625 28.98C13.7417 26.253 20.4525 17.9732 20.4525 11.3682C20.4221 8.96612 19.4549 6.67118 17.757 4.9717C16.0588 3.27267 13.7644 2.30396 11.3628 2.2722L11.3625 2.27254Z" fill="#D48A5C" />
                            <path d="M11.3625 15.9076C10.157 15.9076 9.00103 15.4287 8.14862 14.5765C7.29643 13.7241 6.8175 12.5681 6.8175 11.3626C6.8175 10.1572 7.29642 9.00115 8.14862 8.14874C9.00103 7.29655 10.157 6.81763 11.3625 6.81763C12.5679 6.81763 13.724 7.29654 14.5764 8.14874C15.4286 9.00115 15.9075 10.1572 15.9075 11.3626C15.9075 12.5681 15.4286 13.7241 14.5764 14.5765C13.724 15.4287 12.5679 15.9076 11.3625 15.9076ZM11.3625 9.09012C10.7598 9.09012 10.1819 9.32957 9.75556 9.75568C9.32946 10.182 9.09 10.7599 9.09 11.3626C9.09 11.9653 9.32945 12.5432 9.75556 12.9696C10.1819 13.3956 10.7598 13.6351 11.3625 13.6351C11.9652 13.6351 12.5431 13.3957 12.9694 12.9696C13.3955 12.5432 13.635 11.9653 13.635 11.3626C13.635 10.7599 13.3955 10.182 12.9694 9.75568C12.5431 9.32959 11.9652 9.09012 11.3625 9.09012Z" fill="#D48A5C" />
                        </svg>
                        <span className="font-semibold">
                            Address:
                            <span className=" font-light ml-2">
                                30 North Wes New
                            </span>
                        </span>
                    </div>
                    <div className="lg:w-1/3 w-full relative">
                        <input type="email" placeholder="Enter your email" className={`bg-[#F2EAE2] placeholder:text-[#8D8D8D] py-2 px-3 w-full focus:outline-none ${theme === "light" ? "text-black" : "text-black"}`} />
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-4">
                            <path d="M1.29011 12.3558L7.24598 12.9139L9.57775 18.4897C9.6466 18.6466 9.79783 18.7515 9.96897 18.7609C10.1317 18.7616 10.2831 18.6777 10.3691 18.5395L13.2044 15.1524L18.6786 17.3741C18.8065 17.4258 18.951 17.415 19.0698 17.3449C19.1884 17.2746 19.2677 17.1532 19.2841 17.0162L21.2468 0.485302C21.2666 0.318318 21.1901 0.154634 21.0492 0.0627531C20.9084 -0.0291282 20.7277 -0.0333109 20.583 0.0520311L1.10691 11.5344C0.94169 11.6319 0.858178 11.8246 0.89992 12.0117C0.941659 12.1989 1.09913 12.3378 1.29011 12.3558ZM17.912 3.58042L10.5697 13.4865C10.5313 13.5385 10.5048 13.5979 10.4917 13.6609L9.84081 16.8266L8.07977 12.6155L17.912 3.58042Z" fill="#D58A5C" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between lg:gap-0 mt-5">
                    <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
                        <div className='flex flex-col items-center'>
                            <svg width="29" height="35" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 0C6.65981 0 0.318237 6.34664 0.318237 14.1936C0.318237 20.7202 4.70287 26.201 10.6875 27.8655C10.8051 27.8999 10.9051 27.9779 10.9666 28.0839L14.5 34.1912L18.0334 28.0839C18.0949 27.9779 18.1949 27.8999 18.3125 27.8655C24.2954 26.1994 28.6818 20.7183 28.6818 14.1936C28.6818 6.34574 22.3403 0 14.5 0H14.5ZM14.5 4.2134C20.0306 4.2134 24.5293 8.70731 24.5293 14.2427C24.5293 19.778 20.0308 24.2719 14.5 24.2719C8.96928 24.2719 4.47079 19.778 4.47079 14.2427C4.47079 8.70731 8.96928 4.2134 14.5 4.2134V4.2134ZM11.8895 6.99384C11.6998 7.01823 11.5494 7.1654 11.5212 7.35457C11.493 7.54375 11.5938 7.72859 11.7681 7.80718C12.108 7.97413 12.2988 8.1438 12.3996 8.26847C12.5004 8.39341 12.5224 8.46415 12.521 8.57202C12.5172 8.78775 12.3318 9.16177 12.0717 9.5678C11.8115 9.97382 11.4854 10.4126 11.4646 10.9885C11.454 11.2764 11.5413 11.5859 11.7437 11.8507C11.9462 12.1155 12.2381 12.3494 12.6421 12.5548H12.6424C12.7438 12.6063 12.8614 12.6155 12.9695 12.5803C13.078 12.545 13.1677 12.4681 13.2192 12.3667C13.2707 12.2653 13.2799 12.1474 13.2444 12.0393C13.2091 11.9312 13.1322 11.8414 13.0308 11.7899C12.7012 11.6222 12.518 11.4642 12.4237 11.3406C12.3291 11.217 12.3104 11.1357 12.3145 11.0248C12.3226 10.8031 12.527 10.437 12.788 10.0291C13.0492 9.62144 13.3755 9.16289 13.3829 8.58423C13.3867 8.29478 13.2774 7.98283 13.0671 7.72209C12.8571 7.46136 12.5568 7.24481 12.1443 7.04208L12.1445 7.04235C12.0808 7.00902 12.0098 6.99248 11.938 6.99384C11.9217 6.99275 11.9058 6.99275 11.8895 6.99384L11.8895 6.99384ZM14.1965 7.72236C14.0377 7.7435 13.9041 7.85164 13.8504 8.0026C13.7965 8.15356 13.8317 8.32187 13.9415 8.43868C14.2109 8.74169 14.2239 8.88805 14.1965 9.05798C14.1694 9.22791 14.0445 9.45259 13.8808 9.72579C13.7171 9.99898 13.5081 10.3367 13.4921 10.7701C13.4761 11.2034 13.6829 11.6639 14.1355 12.1057H14.1358C14.2128 12.1992 14.326 12.2556 14.4472 12.261C14.5683 12.2661 14.686 12.2195 14.7711 12.1331C14.8559 12.0463 14.8998 11.9279 14.8922 11.8067C14.8846 11.6859 14.8258 11.5737 14.7307 11.4986C14.3851 11.1614 14.3483 10.9603 14.3542 10.7945C14.3605 10.6286 14.4537 10.4346 14.6093 10.1752C14.7646 9.91609 14.9684 9.61254 15.0342 9.20384C15.1001 8.79513 14.9716 8.30325 14.5849 7.86822L14.5851 7.86795C14.4971 7.76686 14.3667 7.71292 14.2328 7.7224C14.2206 7.72186 14.2084 7.72186 14.1962 7.7224L14.1965 7.72236ZM8.85404 13.4654C8.65809 13.5063 8.51661 13.6778 8.51417 13.8781C8.51417 13.8781 8.50333 14.6305 8.56269 15.5536C8.62231 16.4767 8.73777 17.5597 9.08468 18.3585C9.49203 19.2965 10.3151 20.154 10.9423 20.7746L10.9425 20.7749C11.0236 20.854 11.1328 20.8977 11.2461 20.8963H15.1437H15.1434C15.2567 20.8977 15.366 20.854 15.447 20.7749C16.0181 20.2104 16.749 19.4525 17.1832 18.6138C17.2211 18.61 17.3943 18.594 17.6444 18.5531C17.9206 18.5081 18.2355 18.4512 18.5066 18.3346C19.1183 18.0712 19.7137 17.6655 20.0728 17.1811C20.2875 16.8919 20.5122 16.5312 20.5948 16.1006C20.6778 15.6699 20.5813 15.1534 20.2062 14.7405C19.9755 14.4869 19.6801 14.4064 19.3807 14.34C19.0809 14.2733 18.7559 14.2432 18.4578 14.2307C18.2307 14.2212 18.0494 14.2272 17.8751 14.2307V13.8787L17.8754 13.8781C17.8675 13.6488 17.68 13.4667 17.4504 13.4654H8.93854C8.91035 13.4626 8.8819 13.4626 8.85371 13.4654L8.85404 13.4654ZM17.8634 15.0801C18.0309 15.0766 18.2089 15.0712 18.422 15.0801C18.6905 15.0915 18.9797 15.1164 19.199 15.1652C19.4185 15.214 19.564 15.3108 19.5754 15.3229C19.7852 15.5536 19.8009 15.7162 19.7576 15.9422C19.7142 16.1683 19.5681 16.4352 19.3933 16.6708C19.1903 16.9442 18.6561 17.3342 18.1669 17.5451C18.0625 17.5901 17.7709 17.6619 17.5235 17.7029C17.7064 17.0207 17.7948 16.2423 17.8392 15.5536C17.8501 15.3839 17.8574 15.2346 17.8633 15.0801H17.8634Z" fill="#E09446" />
                            </svg>
                            <h1 className=' font-aclonica text-xl'>Cafena</h1>
                        </div>
                        <p className={`${theme === "light" ? "text-[#848484] text-center lg:text-start" : "text-white  text-center lg:text-start"}`}>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.7249 12.8975C17.7453 12.8975 12.8967 17.7755 12.8967 23.7915C12.8967 29.2531 16.8961 33.7632 22.1061 34.551V26.6784H19.427V23.8149H22.1061V21.9093C22.1061 18.7547 23.6337 17.3703 26.24 17.3703C27.4877 17.3703 28.1486 17.4637 28.4606 17.5056V20.005H26.6831C25.577 20.005 25.1905 21.0608 25.1905 22.25V23.8149H28.4327L27.9933 26.6784H25.1905V34.5736C30.4755 33.8529 34.5531 29.3068 34.5531 23.7915C34.5531 17.7755 29.705 12.8975 23.7249 12.8975Z" fill="#00B2FF" />
                            <rect x="0.5" y="0.5" width="45.0606" height="45.0606" rx="3.5" stroke="#6D6D6D" />
                        </svg>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2715 14.7395C16.2538 14.7395 13.7985 17.1986 13.7985 20.2197V28.0467C13.7985 31.0675 16.2553 33.5255 19.2737 33.5255H27.0936C30.1116 33.5255 32.5673 31.0664 32.5673 28.0453V20.2175C32.5673 17.1971 30.1105 14.7395 27.0921 14.7395H19.2715ZM28.8135 17.7453C29.228 17.7453 29.5643 18.0819 29.5643 18.4967C29.5643 18.9115 29.228 19.2481 28.8135 19.2481C28.3991 19.2481 28.0628 18.9115 28.0628 18.4967C28.0628 18.0819 28.3991 17.7453 28.8135 17.7453ZM23.1829 19.2481C25.8743 19.2481 28.0628 21.4386 28.0628 24.1325C28.0628 26.8264 25.874 29.0168 23.1829 29.0168C20.4914 29.0168 18.303 26.826 18.303 24.1325C18.303 21.439 20.4914 19.2481 23.1829 19.2481ZM23.1829 20.751C21.3169 20.751 19.8045 22.2648 19.8045 24.1325C19.8045 26.0002 21.3169 27.514 23.1829 27.514C25.0489 27.514 26.5613 26.0002 26.5613 24.1325C26.5613 22.2648 25.0489 20.751 23.1829 20.751Z" fill="#F33333" />
                            <rect x="0.669556" y="0.5" width="45.0606" height="45.0606" rx="3.5" stroke="#6D6D6D" />
                        </svg>
                        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.3456 15.2938C34.4652 15.7035 33.5186 15.9767 32.52 16.1058C33.5354 15.4726 34.3163 14.4628 34.6829 13.2698C33.7329 13.8548 32.6806 14.2844 31.5608 14.5109C30.6666 13.5152 29.3911 12.8975 27.9781 12.8975C25.2637 12.8975 23.0638 15.1885 23.0638 18.013C23.0638 18.4126 23.1083 18.8021 23.1922 19.1801C19.1088 18.9647 15.4871 16.9257 13.0642 13.831C12.6384 14.5871 12.399 15.4726 12.399 16.4071C12.399 18.1831 13.2646 19.7463 14.5845 20.6675C13.7788 20.6415 13.0205 20.4063 12.3566 20.0287C12.3566 20.0441 12.3566 20.067 12.3566 20.0886C12.3566 22.5704 14.051 24.6367 16.297 25.1072C15.8864 25.2253 15.4527 25.291 15.0056 25.291C14.6881 25.291 14.379 25.2531 14.0796 25.1967C14.7049 27.2247 16.5193 28.7072 18.6688 28.7508C16.9869 30.1206 14.8689 30.941 12.5655 30.941C12.1674 30.941 11.7786 30.9172 11.394 30.8683C13.5695 32.3156 16.1536 33.1641 18.9272 33.1641C27.9651 33.1641 32.9092 25.3676 32.9092 18.6043C32.9092 18.3827 32.9025 18.1619 32.8924 17.9439C33.8575 17.2284 34.6888 16.3252 35.3456 15.2938Z" fill="#00B2FF" />
                            <rect x="0.8396" y="0.5" width="45.0606" height="45.0606" rx="3.5" stroke="#6D6D6D" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center border-t border-[#EAB665] py-6 mt-5 text-center">
                    <Typography className="font-normal text-[#979797]">
                        ALL RIGHT RESERVED © 2022
                    </Typography>
                </div>
            </div>
        </footer >
    );
}

export default Footer