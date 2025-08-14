function spitLoot() {

    const rareLoot = [
        "power core from a securicorp riot suppression vehicle",
        "godweb oscillator-crucial to long-range, open air, high output commercial power distribution",
        "wispertek nanovoice psychic intrusion element",
        "blastbeat rhythmic stepper motor, custom-built for the drummer of [nam.upperCase][num][num]mk[face]lt",
        "ceramic heating coil from a 20th century breezewood supplies usb coffee warmer",
        "neural-empathic link from a quadrupedal secops ak-k9 unit",
        "ceralase cutting wheel from a high-end medexx auto-doc",
        "concussion-resistant heel pads from the airboots of a professional diskwar player",
        "[nam.upperCase][num][char][nam.lowerCase][face] [virus] chip, installed in the [place.desc] [device] of {a} [place.output.lowerCase]",
        "antiphysical matter generator, a component of 10m's hollow wall domestic protection field",
        "deepbase neural storage unit from a bigbrain municipal traffops coordinator",
        "sound emitter from a d0nt-resist sonic riot suppression anti-personnel device"
    ];

    const op = [
        /*adj.sentenceCase + "! " + {A} + " " +*/rareLoot[roll(rareLoot.length)],
        //"This|That" + " " + junk[0] + " is so " + [adj] + "!",
        "I wish I could [verb] that [junk].",
        "Aren't [junk.pluralForm] just so [adj]?",
        "Found {a} [junk] [prep] [place.output]! We better [verb] it!",
        "THE [junk.upperCase]! It's eating the import:common-noun!",
        "{A} [junk] is a bit like {a} import:common-noun."
    ];

    document.getElementById("loot").innerHTML = op[0];
}