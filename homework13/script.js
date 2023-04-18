

function* createIdGenerator(start){
    for(let i = start;; i++ )
    yield i
}
let idGenerator = createIdGenerator(0);
idGenerator.next()