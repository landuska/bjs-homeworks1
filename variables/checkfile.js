//ПЕРВАЯ ЗАДАЧА

console.log(log.getName());

console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade('отлично', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage());

console.log(log.getGradesBySubject('algebra'));
console.log(log.getGradesBySubject('geometry'));
console.log(log.getGradesBySubject('math'));

console.log(log.getGrades());
console.log(arm, bow, sword, knife, staff, longbow, axe, stormStaff )

//Вторая задача
//ОРУЖИЕ

weapon.takeDamage(5);
console.log(weapon.durability);
weapon.takeDamage(50);
console.log(weapon.durability);

arm.takeDamage(20);
console.log(arm.durability);

sword.takeDamage(20);
sword.takeDamage(100);
console.log(sword.durability);

console.log(bow.getDamage(), bow.durability);
bow.takeDamage(100); 
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(90);
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(150);
console.log(bow.getDamage(), bow.durability);

//ВОИНЫ

console.log(player.getLuck());
console.log(player.getLuck());

console.log(player.getDamage(1));
console.log(player.getDamage(1));
console.log(player.getDamage(2));
console.log(player.getDamage(4));

console.log(player.life);
player.takeDamage(10);
console.log(player.life);
player.takeDamage(80);
console.log(player.life);
player.takeDamage(90);
console.log(player.life);

console.log(player.isDead());
console.log(player, warrior, archer, mage, dwarf, crossbowman, demiurge)

console.log(archer.getDamage(1));

console.log(warrior.life, warrior.magic);

warrior.takeDamage(50);
console.log(warrior.life, warrior.magic);

warrior.takeDamage(20);
console.log(warrior.life, warrior.magic);

warrior.takeDamage(5);
console.log(warrior.life, warrior.magic);

warrior.takeDamage(7);
console.log(warrior.life, warrior.magic);

warrior.takeDamage(5);
console.log(warrior.life, warrior.magic);

warrior.takeDamage(22);
console.log(warrior.life, warrior.magic);

warrior.takeDamage(30);
console.log(warrior.life, warrior.magic);


console.log(weapon.getDamage(), weapon.range, demiurge.attack,demiurge.getLuck() )
console.log(demiurge.getDamage(1));
console.log(demiurge.getDamage(1));

console.log(mage.life, mage.magic);

mage.takeDamage(50);
console.log(mage.life, mage.magic);
mage.takeDamage(20);
console.log(mage.life, mage.magic);

mage.takeDamage(5);
console.log(mage.life, mage.magic);
mage.takeDamage(7);
console.log(mage.life, mage.magic);
mage.takeDamage(5);
console.log(mage.life, mage.magic);

mage.takeDamage(22);
console.log(mage.life, mage.magic);
mage.takeDamage(30);
console.log(mage.life, mage.magic);