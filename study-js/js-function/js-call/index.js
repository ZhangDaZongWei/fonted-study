var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'King'}
]

for (let i=0; i<animals.length; i++) {
 ((i) => {
   this.print = () => {
     console.log('index number: ',i)
   }
   this.print()
 }).call(animals[i],i)
}