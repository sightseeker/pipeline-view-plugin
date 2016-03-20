import * as React from "react";

export default function({ node }) {
    if (node.getAction("org.jenkinsci.plugins.workflow.actions.BodyInvocationAction") != null) {
        return false;
    }

    return (
        <div style={{ padding: 2 }}>
            <svg width="48px" viewBox="50.0 0 614.06085 403.5986">
                <path fill="#333"
                    d="m 154.97687,332.69162 c 0,-0.80587 10.83123,-18.62172 24.0694,-39.59076 13.23819,-20.96905 22.66057,-38.62066 20.93867,-39.22577 -1.72191,-0.6051 -7.67992,0.48567 -13.24002,2.42393 -16.74524,5.83743 -20.18605,4.29016 -32.69308,-14.70155 -13.53265,-20.54906 -14.01724,-22.66983 -6.96158,-30.46624 4.60876,-5.09256 4.33159,-6.27967 -3.2319,-13.84316 -4.55009,-4.5501 -8.27289,-9.64309 -8.27289,-11.31776 0,-2.81679 -30.99145,-15.58933 -79.989496,-32.96615 -11.10966,-3.93997 -20.199375,-7.82928 -20.199375,-8.64291 0,-0.81366 23.470738,-1.00476 52.157191,-0.42469 l 52.15721,1.05466 5.09127,-8.03001 c 21.51644,-33.93592 54.00952,-64.588212 68.46705,-64.588212 3.0106,0 9.12141,2.86918 13.57953,6.375945 7.25946,5.710283 8.2565,9.248632 9.54994,33.891967 0.7943,15.13382 2.42422,28.49601 3.62198,29.69379 1.19775,1.19776 4.99769,-0.37425 8.44431,-3.49339 4.4014,-3.98323 9.03484,-5.06313 15.56761,-3.6283 6.76756,1.48641 10.6271,0.46895 14.16938,-3.73543 5.3136,-6.30666 31.90596,-48.937201 31.90596,-51.148744 0,-0.751588 5.26509,-9.757306 11.70023,-20.012703 6.43509,-10.255397 13.84664,-22.080631 16.47007,-26.278283 4.66558,-7.465201 5.3966,-6.581735 33.42692,40.398736 28.94121,48.507164 44.51767,66.406554 52.3157,60.117634 5.442,-4.38889 34.00055,-4.63794 41.98246,-0.36614 4.53665,2.42793 7.41916,2.3961 9.92484,-0.10962 5.20007,-5.20006 17.64982,-4.29437 20.90412,1.52078 2.56393,4.58146 3.21784,4.58146 7.02014,0 2.30606,-2.77867 9.13619,-5.05208 15.17803,-5.05208 8.53884,0 11.79336,1.77367 14.61403,7.96437 l 3.62881,7.96436 56.09203,-1.9858 c 30.85062,-1.09222 56.09204,-1.28688 56.09204,-0.43255 0,0.85427 -22.90608,10.07195 -50.90241,20.48371 -27.99632,10.41172 -51.367,19.24305 -51.93484,19.62512 -0.56785,0.38207 0.69847,9.49273 2.81405,20.24588 5.50457,27.97917 1.91458,46.62589 -11.92629,61.94604 -6.209,6.87263 -16.28338,14.14395 -22.38753,16.15849 -6.10415,2.01454 -11.09844,4.38614 -11.09844,5.27019 0,0.88406 6.51525,11.67893 14.47835,23.98859 7.96309,12.30969 13.2828,22.38125 11.82152,22.38125 -2.38504,0 -60.46987,-22.44238 -150.78898,-58.2607 -17.809,-7.06258 -34.02683,-12.84109 -36.03961,-12.84109 -3.75363,0 -36.1669,12.28662 -131.22423,49.74206 -55.12525,21.72103 -57.29217,22.47348 -57.29217,19.89451 z m 113.11648,-51.25265 c 29.32949,-11.39506 58.41657,-22.5308 64.63798,-24.74607 10.70068,-3.81019 14.27918,-2.85493 66.25394,17.68634 30.21825,11.94274 60.03252,23.57587 66.25392,25.85134 6.22141,2.27552 19.04317,7.22059 28.49275,10.98908 10.77503,4.29704 16.28251,5.33166 14.77108,2.77484 -16.8837,-28.56113 -17.3998,-29.03716 -29.10083,-26.84205 -14.11361,2.64772 -22.87897,-0.0685 -27.38369,-8.48554 -2.92112,-5.45816 -2.02944,-8.12759 5.25442,-15.73031 10.84887,-11.32377 9.14457,-21.74144 -4.84429,-29.61099 -5.36764,-3.01959 -12.14059,-10.48372 -15.05102,-16.58697 l -5.29169,-11.09682 -11.34551,7.69928 c -13.94458,9.46304 -30.95062,9.95063 -45.14764,1.29448 l -10.46488,-6.38065 -12.15841,8.26284 c -12.17462,8.27386 -26.19108,9.3428 -40.43752,3.08392 -3.92498,-1.72439 -5.65583,-1.05415 -5.65583,2.19008 0,2.57118 -3.70429,6.36265 -8.23181,8.42553 -13.5742,6.18479 -26.82107,4.54247 -35.80229,-4.43875 l -8.18944,-8.18944 -6.60982,8.40303 c -3.63539,4.62166 -12.04952,11.83698 -18.69805,16.03398 -8.22965,5.19518 -18.41741,17.87182 -31.9164,39.71361 -10.90549,17.64546 -19.82816,32.98042 -19.82816,34.07776 0,1.0973 8.36255,-1.52736 18.58342,-5.83259 10.22089,-4.30521 42.58028,-17.15087 71.90977,-28.54593 z m 248.76729,-12.25846 c 22.25557,-12.50833 27.41424,-35.64808 17.57685,-78.84318 -8.2214,-36.09961 -12.3255,-47.91327 -17.19494,-49.49597 -3.36902,-1.09503 -3.88674,0.10699 -1.98858,4.61635 12.31516,29.25771 12.99963,43.94662 2.24022,48.07541 -7.39151,2.83642 -15.23239,-7.79075 -21.39902,-29.00326 -4.77512,-16.42587 -9.76861,-23.82837 -13.53387,-20.06311 -0.90157,0.9016 0.67848,6.12117 3.51124,11.59913 2.83273,5.4779 6.71721,21.97455 8.63217,36.6592 1.91497,14.68462 5.61385,30.06073 8.21973,34.16912 6.77198,10.67661 17.55128,8.1036 24.52382,-5.85384 6.89373,-13.79975 7.67284,-4.60781 0.9693,11.43602 -6.96074,16.65937 -27.63442,21.65481 -51.58418,12.46442 -3.8333,-1.47096 -5.13039,0.0515 -5.13039,6.02097 0,4.39431 -2.93618,11.72245 -6.52488,16.2847 l -6.52488,8.29506 8.94881,1.51123 c 15.44945,2.60909 36.63328,-0.77642 49.2586,-7.87225 z m -320.3665,-27.53733 c 46.45965,-13.3545 54.76188,-28.93093 39.32885,-73.78782 -3.58185,-10.41079 -6.51243,-21.60971 -6.51243,-24.88654 0,-11.15712 -5.61152,-6.00161 -9.81713,9.01943 -5.56203,19.86561 -22.29115,36.75053 -36.34516,36.68364 -12.20547,-0.0582 -16.18251,-2.28008 -21.22378,-11.85768 -9.04748,-17.18882 0.81469,-43.56797 25.96954,-69.46272 18.42431,-18.966304 28.48893,-20.683965 28.48893,-4.86205 0,24.6732 -17.01134,60.9947 -25.97309,55.45604 -4.38205,-2.70826 -3.67138,-14.66752 1.41722,-23.85009 4.32735,-7.80882 3.44814,-19.70771 -1.4562,-19.70771 -5.68689,0 -16.94547,20.71196 -18.43318,33.91074 -1.31515,11.66826 -0.49286,14.50545 5.06652,17.48072 19.48244,10.4267 45.00531,-21.39545 46.29083,-57.71584 0.67504,-19.073181 -3.01676,-24.441105 -14.77906,-21.488951 -17.11879,4.296543 -63.23483,63.786641 -63.23483,81.573461 0,13.9128 6.98737,23.69728 19.28827,27.0096 20.91419,5.63162 41.13539,-4.37389 55.4633,-27.44338 l 6.02175,-9.69571 0.0132,13.17223 c 0.0162,19.0738 -12.42619,29.1274 -51.69817,41.76793 -9.77649,3.1468 -18.18332,6.05441 -18.6818,6.46137 -1.82056,1.48632 16.68739,27.47571 19.56644,27.47571 1.63262,0 11.19115,-2.36359 21.24123,-5.25238 z M 476.411,217.96301 c 4.66347,-5.1531 5.48551,-10.75103 4.48579,-30.54823 -1.08739,-21.53331 -2.27746,-25.33851 -10.66143,-34.08949 -15.14882,-15.81194 -33.86123,-11.77828 -22.90819,4.93814 5.82256,8.88637 12.9254,7.36864 10.41641,-2.22581 -1.99864,-7.64276 1.72998,-7.84358 8.22839,-0.44322 12.19301,13.88537 9.11534,33.12698 -5.2986,33.12698 -9.86716,0 -12.94195,-4.23176 -19.37353,-26.66318 -2.93059,-10.22087 -6.49964,-18.58343 -7.93127,-18.58343 -4.76899,0 -6.89287,4.20878 -3.92721,7.7824 1.61088,1.9411 6.07218,15.89127 9.91404,31.00041 9.66903,38.02596 23.17666,51.04145 37.0556,35.70543 z m -183.77125,0.60395 c 1.98978,-1.335 2.89975,-7.64893 2.07865,-14.423 -1.32449,-10.92702 -2.06662,-11.7241 -7.9727,-8.56327 -8.48733,4.54227 -17.60839,-4.06351 -20.70222,-19.5326 -2.34707,-11.73538 -3.06526,-11.50489 14.02576,-4.50149 2.14288,0.87808 7.59671,-2.10402 12.11963,-6.62694 8.27408,-8.27408 10.99802,-18.21299 4.99156,-18.21299 -1.77754,0 -3.2319,1.45436 -3.2319,3.2319 0,4.64923 -8.84231,3.98982 -10.83465,-0.80797 -1.16224,-2.79879 -3.63807,-1.80591 -8.05915,3.2319 -3.50985,3.99948 -7.79673,7.27178 -9.52641,7.27178 -1.72969,0 -4.0656,-3.2723 -5.19088,-7.27178 -1.97195,-7.00856 -2.21366,-7.05277 -6.67737,-1.22169 -3.9106,5.10854 -3.94557,6.73583 -0.22461,10.45661 3.94062,3.94064 11.42615,30.87102 11.42615,41.10744 0,12.72867 17.52933,22.73832 27.7783,15.8621 z m 58.94309,-16.87531 c 12.14567,-12.14567 15.74452,-30.35143 9.12943,-46.18357 -5.17016,-12.37397 -14.14466,-17.00516 -26.79878,-13.82918 -9.40263,2.35991 -23.72311,29.77659 -23.77387,45.51536 -0.0792,24.52902 23.25053,32.69005 41.44322,14.49739 z m -22.08341,-19.43407 c -3.5551,-3.5551 -6.41755,-10.46328 -6.36102,-15.35153 0.0934,-8.07965 0.49315,-8.3735 4.39619,-3.2319 4.82464,6.35569 13.39797,7.45666 16.68241,2.14232 1.19432,-1.93241 0.55295,-5.13202 -1.4252,-7.11017 -5.08132,-5.08132 -4.46561,-11.99963 1.06792,-11.99963 6.15137,0 14.72679,12.51477 14.72679,21.49191 0,6.60674 -13.4444,20.5228 -19.82724,20.5228 -1.53785,0 -5.70476,-2.90872 -9.25985,-6.4638 z m 86.34897,18.58341 c 13.41074,-14.60263 12.10376,-37.098 -3.09825,-53.32634 -7.85057,-8.3806 -25.29298,-9.82552 -32.43185,-2.68664 -6.58761,6.58761 -13.16465,32.49303 -10.72122,42.22841 5.21122,20.76318 32.40041,28.86652 46.25132,13.78457 z m -27.45565,-23.61452 c -5.30623,-3.71664 -7.12941,-8.14974 -6.97806,-16.96747 0.16935,-9.86033 0.6843,-10.74981 2.96145,-5.11415 3.34573,8.28032 10.36292,11.40734 16.51814,7.3609 3.81753,-2.50963 3.63929,-3.69597 -1.10104,-7.32907 -6.32189,-4.84523 -7.55508,-11.70191 -2.10465,-11.70191 4.87364,0 22.30402,19.06666 22.30402,24.39778 0,5.20316 -12.37739,14.38503 -19.39139,14.38503 -2.76405,0 -8.2579,-2.26402 -12.20847,-5.03111 z m 189.96292,-14.28887 33.93495,-12.73682 -36.35888,-0.13125 c -32.5392,-0.11736 -36.35424,0.46307 -36.31475,5.52475 0.0401,5.12757 3.33073,20.28395 4.3727,20.13967 0.23722,-0.0329 15.70177,-5.79124 34.36598,-12.79648 z m -443.49343,-2.2793 3.46825,-10.28761 -30.46686,-1.02404 c -16.756744,-0.56322 -30.463584,-0.13213 -30.45958,0.95804 0.0058,1.59513 52.50657,22.10707 53.66174,20.96552 0.18035,-0.1784 1.88892,-4.95372 3.79645,-10.61191 z m 208.9092,-31.88695 c 7.16667,1.146 15.24981,4.07924 17.96256,6.51835 4.21279,3.78783 6.04528,3.52966 12.56207,-1.76985 4.19643,-3.4125 9.65026,-6.20457 12.11963,-6.20457 2.46939,0 4.48982,-0.71308 4.48982,-1.58467 0,-3.00918 -46.53954,-79.21252 -48.31447,-79.10961 -2.085,0.120872 -49.78603,80.08798 -51.25464,85.92437 -0.61634,2.44952 1.31804,3.35371 5.07364,2.3716 3.33836,-0.873 7.95416,0.68326 10.25727,3.45836 3.7354,4.50087 5.26108,4.14229 14.13068,-3.32097 8.42647,-7.09041 11.9308,-8.0488 22.97344,-6.28301 z"
                    />
                <path fill="#6398aa" stroke="none"
                    d="m 309.54579,140.87922 c -0.50075,-0.23311 -1.11804,-0.76799 -2.5278,-2.19035 -1.91188,-1.92897 -2.67188,-2.49013 -4.26108,-3.14628 -2.08791,-0.86204 -4.3549,-1.09423 -6.48231,-0.66391 -1.89808,0.38393 -2.42435,0.42527 -3.28242,0.2578 -1.43224,-0.27953 -1.94157,-1.14929 -1.53583,-2.62272 0.50573,-1.83657 4.33693,-8.94255 12.00899,-22.27387 15.5837,-27.078988 36.53624,-61.220968 38.85056,-63.306662 0.25631,-0.230994 0.265,-0.230994 0.52248,0 1.37768,1.235976 9.4762,13.725889 20.54036,31.678298 14.96696,24.285004 27.41102,45.643714 27.41102,47.047704 0,0.85729 -1.31608,1.37215 -4.08591,1.59845 -3.44226,0.28124 -7.42478,2.30188 -12.86887,6.52936 -2.58712,2.00898 -3.69126,2.75933 -4.95062,3.36438 -1.04928,0.50411 -1.13692,0.52437 -2.26854,0.52437 -1.11368,0 -1.22661,-0.0249 -2.09623,-0.46128 -0.51213,-0.25702 -1.50469,-0.9493 -2.24155,-1.56342 -2.17848,-1.81561 -4.79918,-3.13614 -9.07197,-4.57124 -5.42997,-1.82376 -11.24454,-2.9184 -16.19551,-3.04896 -3.90934,-0.10308 -5.71201,0.24798 -8.67602,1.68963 -2.41988,1.17698 -3.58621,2.01311 -9.12475,6.54145 -5.63376,4.60617 -7.63442,5.56205 -9.664,4.61725 z"
                    />
                <path fill="#6398aa" stroke="none"
                    d="m 128.63786,170.739 c -10.159,-2.9607 -45.503171,-16.91962 -50.450924,-19.92523 -0.682916,-0.41484 -0.738098,-0.47787 -0.543207,-0.62038 1.131563,-0.82741 12.337983,-1.23901 25.004031,-0.91836 5.05131,0.12788 35.50132,1.13323 35.5509,1.17377 0.0997,0.0815 -6.52164,19.2888 -7.03051,20.39433 -0.21251,0.4617 -0.65063,0.44367 -2.53029,-0.10413 z"
                    />
                <path fill="#6398aa" stroke="none"
                    d="m 543.69413,175.31055 c -1.3862,-2.71287 -3.88769,-14.97067 -3.96078,-19.40858 -0.0284,-1.72424 0.18667,-2.42741 0.9606,-3.1408 1.77378,-1.63501 5.37938,-2.2232 15.29017,-2.49434 5.00347,-0.13689 28.1019,-0.15796 44.41127,-0.0405 l 11.42859,0.0823 -27.5177,10.31427 c -25.09292,9.4054 -39.68473,14.84126 -40.22491,14.9849 -0.13517,0.036 -0.26981,-0.0674 -0.38724,-0.29723 l 0,0 z"
                    />
                <path fill="#6398aa" stroke="none"
                    d="m 178.08835,315.51433 c 0,-0.77078 3.2689,-6.5331 11.55395,-20.36698 19.85118,-33.14631 28.92715,-45.16012 40.07292,-53.04429 9.97127,-7.05337 15.30279,-11.9294 21.24539,-19.43033 l 3.66409,-4.62492 4.9399,4.85652 c 8.64784,8.50189 13.8613,10.96668 23.29717,11.01432 11.54058,0.0583 24.17849,-6.3881 24.17849,-12.33299 0,-1.3398 0.95404,-2.72236 1.87857,-2.72236 0.39132,0 2.61686,0.68365 4.94565,1.51923 6.06992,2.1779 9.63028,2.96548 14.60912,3.23165 4.93998,0.26409 8.54848,-0.1704 13.35817,-1.60841 4.72561,-1.41288 7.44709,-2.85905 15.59833,-8.28882 4.1076,-2.73618 7.59954,-4.97487 7.75988,-4.97487 0.16033,0 3.12534,1.71896 6.5889,3.81991 3.46356,2.10095 7.62542,4.38133 9.24859,5.06751 11.06862,4.67918 23.02445,4.3739 33.97126,-0.86741 1.95795,-0.93747 6.56793,-3.73074 10.2444,-6.20727 3.67648,-2.47653 6.73613,-4.44576 6.79923,-4.37606 0.0631,0.0697 1.45605,2.9208 3.09544,6.33578 1.6394,3.41498 3.69895,7.2667 4.57679,8.55937 3.80001,5.59578 8.17588,9.75141 14.08343,13.37464 6.08122,3.72975 9.83206,8.6868 10.21882,13.50507 0.38367,4.77968 -1.70329,9.01939 -7.72189,15.68721 -4.69747,5.20419 -5.8733,7.2354 -5.86113,10.12491 0.0122,2.89262 1.70103,6.22854 4.66964,9.22379 4.80533,4.84844 12.34605,6.28777 23.43534,4.47319 2.47408,-0.40484 5.59479,-0.73757 6.93491,-0.73938 4.28551,-0.006 6.90319,2.09595 11.89251,9.54859 3.44351,5.14365 10.97396,17.75508 10.97396,18.37836 0,0.32407 -0.35145,0.55208 -0.85097,0.55208 -1.05109,0 -5.62314,-1.2438 -8.93214,-2.42994 -4.3485,-1.55875 -57.27238,-22.00526 -74.74786,-28.87795 -46.6635,-18.35162 -62.02805,-24.21246 -69.53657,-26.52489 -8.11417,-2.49895 -13.64029,-3.08522 -18.12661,-1.92306 -5.57996,1.44546 -81.72067,30.86888 -126.13245,48.74195 -21.93119,8.826 -24.67749,9.87577 -28.78116,11.00159 -3.26303,0.89521 -3.14407,0.88294 -3.14407,0.32426 z"
                    />
            </svg>
        </div>
    );
};

