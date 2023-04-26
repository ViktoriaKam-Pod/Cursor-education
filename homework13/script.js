

function* createIdGenerator(start){
    for(let i = start;; i++ )
    yield i
}
export let idGenerator = createIdGenerator(0);
idGenerator.next()