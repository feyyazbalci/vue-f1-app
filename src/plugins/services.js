export const getColor = (ecurie) => {
    switch (ecurie) {
        case 'Red Bull' :
            return 'bg-blue-10'
        case 'Mercedes' :
            return 'bg-blue-grey-6'
        case 'Ferrari' :
            return 'bg-red';
        case 'McLaren' :
            return 'bg-amber-10'
        case 'AlphaTauri' :
            return 'bg-light-blue-10'
        case 'Alfa Romeo' :
            return 'bg-red-14'
        case 'Haas F1 Team' :
            return 'bg-grey-5'
        case 'Alpine F1 Team' :
            return 'bg-pink-5'
        case 'Williams' :
            return 'bg-light-blue-3'
        case 'Aston Martin' :
            return 'bg-green-8'
        case 'Racing Point' :
            return 'purple accent-1'
        case 'Renault' :
            return 'amber darken-1'
    }

}
