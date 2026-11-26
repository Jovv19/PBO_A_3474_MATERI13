

const pembersih = {
    bersihkan() {
        console.log(this.nama + " membersihkan ruangan.");
    }
};

const pengantar = {
    antarPaket() {
        console.log(this.nama + " mengantar paket.");
    }
};


const penjaga = {
    patroli() {
        console.log(this.nama + " berpatroli di area.");
    }
};


function applyCapabilities(Kelas, ...kemampuan) {
    kemampuan.forEach(kemampuanObjek => {
        Object.assign(Kelas.prototype, kemampuanObjek);
    });
}


class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}


class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}


applyCapabilities(RobotRumah, pembersih, penjaga);
applyCapabilities(RobotKurir, pengantar);


const RobotRumah_XXXX = new RobotRumah("RobotRumah_XXXX");
const RobotKurir_XXXX = new RobotKurir("RobotKurir_XXXX");


RobotRumah_XXXX.bersihkan();
RobotRumah_XXXX.patroli();


RobotKurir_XXXX.antarPaket();


console.log(
    "RobotKurir_XXXX bisa membersihkan? " +
    (typeof RobotKurir_XXXX.bersihkan === "function")
);

console.log(
    "RobotRumah_XXXX bisa mengantar paket? " +
    (typeof RobotRumah_XXXX.antarPaket === "function")
);
