

class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Kendaraan: " + this.nama);
    }
}


class KendaraanBensin extends Kendaraan {
    isiBensin(liter) {
        throw new Error("Method isiBensin() harus diimplementasikan");
    }
}

class KendaraanListrik extends Kendaraan {
    isiDaya(kwh) {
        throw new Error("Method isiDaya() harus diimplementasikan");
    }
}


class MobilBensin extends KendaraanBensin {
    isiBensin(liter) {
        console.log(
            this.nama + " mengisi bensin " + liter + " liter."
        );
    }
}

class MobilListrik extends KendaraanListrik {
    isiDaya(kwh) {
        console.log(
            this.nama + " mengisi daya " + kwh + " kWh."
        );
    }
}


class MotorBensin extends KendaraanBensin {
    isiBensin(liter) {
        console.log(
            this.nama + " mengisi bensin " + liter + " liter."
        );
    }
}


function isiSemuaBensin(daftar) {
    daftar.forEach(kendaraan => {
        kendaraan.isiBensin(20);
    });
}


function isiSemuaDaya(daftar) {
    daftar.forEach(kendaraan => {
        kendaraan.isiDaya(40);
    });
}


const avanza = new MobilBensin("Avanza_XXXX");
const ioniq = new MobilListrik("Ioniq_XXXX");
const beat = new MotorBensin("Beat_XXXX");


avanza.info();
ioniq.info();
beat.info();


isiSemuaBensin([avanza, beat]);


isiSemuaDaya([ioniq]);
