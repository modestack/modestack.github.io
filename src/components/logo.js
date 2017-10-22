import React from 'react'
import Link from 'gatsby-link'
import modestackSvg from '../assets/modestack.svg';

const getModeStackLogo = () => {
    return (
        <svg width='228' height='49' xmlns='http://www.w3.org/2000/svg'>
            <rect fill='none' id='canvas_background' height='51' width='230' y='-1'
                  x='-1' />
            <g id='g10' transform='matrix(.49703 0 0 -.49703 -.327 304.273)'>
                <g id='g12'>
                    <g id='g14'>
                        <g id='g20'>
                            <path fill='#1da1f2' d='m167.024571,560.531627l0,-20.869l-7.251,0l0,18.851c0,5.108 -3.026,8.197 -7.944,8.197c-5.738,-0.19 -9.205,-4.603 -9.205,-10.466l0,-16.582l-7.251,0l0,18.851c0,5.108 -2.963,8.197 -7.881,8.197c-5.801,-0.19 -9.331,-4.603 -9.331,-10.466l0,-16.582l-7.188,0l0,33.542l7.188,-6.494c2.333,4.728 6.62,6.746 12.168,6.746c5.99,0 10.088,-2.963 11.664,-8.071c2.144,5.612 6.62,8.071 12.736,8.071c7.692,0 12.295,-4.918 12.295,-12.925'
                                  id='path22' />
                        </g>
                        <g id='g24'>
                            <path fill='#1da1f2' d='m180.826878,556.370525c0,-6.494 4.224,-10.907 10.277,-10.907c5.99,0 10.214,4.413 10.214,10.907c0,6.431 -4.224,10.845 -10.214,10.845c-6.053,0 -10.277,-4.414 -10.277,-10.845m27.742,0.063c0,-10.087 -7.125,-17.023 -17.465,-17.023c-10.403,0 -17.528,6.936 -17.528,17.023c0,10.151 7.125,17.023 17.528,17.023c10.34,0 17.465,-6.872 17.465,-17.023'
                                  id='path26' />
                        </g>
                        <g id='g28'>
                            <path fill='#1da1f2' d='m240.846897,556.307018c0,6.494 -4.225,11.034 -10.277,11.034c-6.054,0 -10.278,-4.602 -10.341,-11.034c0.063,-6.367 4.224,-10.907 10.341,-10.907c6.052,0 10.277,4.54 10.277,10.907m7.25,-16.645l0,0l-7.25,5.738c-2.396,-3.909 -6.432,-6.053 -11.791,-6.053c-9.646,0 -16.078,6.999 -16.078,17.213c0,10.088 6.494,16.96 15.952,16.96c5.423,0 9.458,-2.207 11.917,-6.116l0,19.041l7.25,0l0,-46.783z'
                                  id='path30' />
                        </g>
                        <g id='g32'>
                            <path fill='#1da1f2' d='m282.328373,558.955516c-0.252,5.422 -3.847,8.701 -9.331,8.701c-5.297,0 -9.017,-3.342 -9.836,-8.701l19.167,0zm6.305,-5.296l-25.346,0c1.135,-5.17 5.106,-8.386 10.403,-8.386c3.657,0 6.998,1.387 9.457,3.91l3.846,-4.099c-3.278,-3.594 -8.07,-5.674 -13.87,-5.674c-10.341,0 -17.149,6.872 -17.149,16.96c0,10.15 6.998,17.023 16.959,17.086c11.791,0 16.582,-7.691 15.7,-19.797'
                                  id='path34' />
                        </g>
                        <g id='g36'>
                            <path fill='#1da1f2' d='m317.94849,570.114604l-2.648,-5.358c-2.963,1.828 -6.683,2.962 -9.647,2.962c-2.837,0 -4.918,-0.945 -4.918,-3.341c0,-6.179 17.844,-2.837 17.78,-15.005c0,-6.873 -6.116,-9.962 -12.862,-9.962c-4.918,0 -10.15,1.639 -13.492,4.665l2.585,5.171c2.9,-2.586 7.565,-4.162 11.223,-4.162c3.089,0 5.485,1.072 5.485,3.593c0,6.874 -17.654,3.027 -17.591,15.132c0,6.81 5.927,9.71 12.357,9.71c4.225,0 8.702,-1.26 11.728,-3.405'
                                  id='path38' />
                        </g>
                        <g id='g40'>
                            <path fill='#1da1f2' d='m344.803013,541.806102c-2.647,-1.576 -5.422,-2.459 -8.26,-2.459c-5.044,0 -9.393,2.9 -9.393,9.772l0,17.402l-4.73,0l4.73,5.423l0,9.205l7.187,0l0,-9.205l9.899,0l0,-5.423l-9.899,0l0,-16.077c0,-3.468 1.324,-4.539 3.594,-4.539c1.513,0 3.089,0.504 5.044,1.45l1.828,-5.549z'
                                  id='path42' />
                        </g>
                        <g id='g44'>
                            <path fill='#1da1f2' d='m371.534397,551.452526l0,3.09l-9.079,0c-4.73,0 -6.936,-1.261 -6.936,-4.477c0,-3.026 2.459,-4.981 6.494,-4.981c5.17,0 9.142,2.712 9.521,6.368m0.062,-7.691c-2.395,-2.964 -6.241,-4.414 -11.096,-4.414c-7.25,0 -11.79,4.476 -11.79,10.403c0,6.116 4.602,10.024 12.673,10.088l10.151,0l0,1.009c0,4.223 -2.711,6.746 -8.008,6.746c-3.215,0 -6.556,-1.135 -9.898,-3.405l-2.963,5.044c4.665,2.774 8.07,4.224 14.437,4.224c8.638,0 13.494,-4.413 13.556,-11.79l0.063,-22.004l-7.125,4.099z'
                                  id='path46' />
                        </g>
                        <g id='g48'>
                            <path fill='#1da1f2' d='m416.043186,567.971111l-3.972,-4.665c-2.333,2.395 -5.549,3.846 -9.584,3.782c-5.8,0 -9.962,-4.349 -9.962,-10.718c0,-6.368 4.162,-10.718 9.962,-10.718c4.225,0 7.629,1.387 9.9,4.035l4.035,-4.035c-3.026,-3.972 -7.882,-6.242 -14.25,-6.242c-9.961,0 -16.897,6.873 -16.897,16.96c0,10.151 6.936,17.086 16.897,17.086c6.053,0 10.782,-1.954 13.871,-5.485'
                                  id='path50' />
                        </g>
                        <g id='g52'>
                            <path fill='#1da1f2' d='m431.549961,549.057018l0,-9.395l-7.25,0l0,46.783l7.25,0l0,-28.246l14.816,15.005l8.324,0l-12.421,-12.988l13.366,-20.554l-8.574,0l-9.836,15.384l-5.675,-5.989z'
                                  id='path54' />
                        </g>
                        <g id='g56'>
                            <path fill='#1da1f2' d='m78.129078,518.023815l-65.744,0c-6.6,0 -12,5.399 -12,12l0,65.744c0,6.6 5.4,12 12,12l65.744,0c6.6,0 12,-5.4 12,-12l0,-65.744c0,-6.601 -5.4,-12 -12,-12'
                                  id='path58' />
                        </g>
                        <g id='g60'>
                            <path fill='#f1f2f2' d='m22.728291,586.832927l0,-11.969l22.529,5.985l0,17.952l-22.529,-11.968z'
                                  id='path62' />
                        </g>
                        <g id='g64'>
                            <path fill='#fff' d='m45.257084,580.848522l30.977,-5.984l0,7.026l-30.977,16.911l0,-17.953z'
                                  id='path66' />
                        </g>
                        <g id='g68'>
                            <path fill='#f1f2f2' d='m22.728291,550.927104l0,-11.968l22.529,-11.969l0,17.953l-22.529,5.984z'
                                  id='path70' />
                        </g>
                        <g id='g72'>
                            <path fill='#fff' d='m45.257084,526.990611l30.977,16.91l0,7.027l-30.977,-5.985l0,-17.952z'
                                  id='path74' />
                        </g>
                        <g id='g76'>
                            <path fill='#fff' d='m46.366383,573.104412l-33.05,-7.041l0,-7.744l33.05,-5.632l0,20.417z'
                                  id='path78' />
                        </g>
                        <g id='g80'>
                            <path fill='#f1f2f2' d='m68.749287,557.615611l-0.384,9.152l-21.999,6.337l0,-20.417l22.383,4.928z'
                                  id='path82' />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
};

const Logo = () => (
    <div>

{getModeStackLogo()}
    </div>
)

export default Logo
