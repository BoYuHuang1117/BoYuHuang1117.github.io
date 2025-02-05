<template>
  <main>
    <h1>Tech Blog</h1>
    <div class="article-container">
      <article v-for="article in paginatedArticles" :key="article.title" class="article-card">
        <h2>{{ article.title }}</h2>
        <p class="date">{{ article.date }}</p>
        <div class="tags">
          <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        
        <div class="content" v-html="article.content"></div>
        
        <div v-if="article.codeExample" class="code-block">
          <pre><code>{{ article.codeExample }}</code></pre>
        </div>
      </article>

      <div class="pagination">
        <button 
          :disabled="currentPage === 1" 
          @click="currentPage--"
          class="pagination-btn"
        >
          Previous
        </button>
        <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
        <button 
          :disabled="currentPage === totalPages" 
          @click="currentPage++"
          class="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'TechView',
  setup() {
    const articles = [
      {
        title: 'Is set (STL in C/C++) really O(1)?',
        date: '2025-02-05',
        tags: ['C++', 'Hashset', 'unordered_set'],
        content: `
          <p>std::set in C++ is O(log n) because it's a <b>tree-based set</b>. 
            It’s a balanced binary search tree which usually is a red-black tree. 
            To achieve O(1), try to use <b>unordered_set</b>.</p>
          <p>In Python, it’s O(1) average.</p>
          <p>In Java, there are three different implementations.</p>
          <ul>
            <li>Hashset: O(1) average; O(n) worst</li>
            <li>LinkedHashSet: O(1) average (extends Hashset without adding any new methods)</li>
            <li>TreeSet: O(log n)</li>
          </ul>
        `,
      },
      {
        title: 'What is the backbone or logic behind hashmap (in Java)?',
        date: '2025-01-16',
        tags: ['Java', 'Hashmap', 'bitwise operation'],
        content: `
          <p>Hashmap consists of an array of Nodes. Each Node has four elements: hash, key, value, next.
            Use hashcode() function to get hash value using key. The default hash function is below (if not overwritten).</p>
          <p>Basically, it does a <b>XOR on higher 16 bits and lower 16 bits</b>.</p>
          <ul>
            <li>initial capacity: 16</li>
            <li>load factor: 0.75</li>
          </ul>
          <p>Assuming that the length of the hashmap is 16 initially, we will use 11112 to locate the bucket.
            Utilizing the AND operator, the bucket index will be the <b>lower 4 bits</b> (depends on hashmap size) of the hash value.
            Then, it will traverse the linked list in the bucket until it gets to the last non-empty or first empty node.</p>
          <p>In case of a <b>collision (index duplication)</b>, nodes within the same bucket will turn into a linked list which allows next to come into play.
            The default size of a linked list is 8. It will become red-black tree once it exceeds the size limit.</p>
          <ul>
            <li>What is the difference between hashmap and map?
            Map is an interface. Hashmap is a concrete class. Hashmap implements Map interface.</li>
            <li> If reaching the load factor on the bucket number, the resize process will enforce capacity to multiply 2 in order to keep using 111112 for locating the bucket index.</li>
          </ul>
        `,
        codeExample: `
int hash(Object key){
	if key == null: return 0;
	int h = key.hashcode();
	int higher_bits = h >> 16;
	return upper ^ h;
}

Node(K, V)getNode(Object key){
	Node(K, V)[] tab = this.table
	if (tab == null || tab.length <= 0): return null;
	
	int h = hash(key);
	bucket_idx = (tab.length - 1) & h;
	Node(K, V) first_node = tab[bucket_idx];
	if first_node == null: return null;

	// To get the first empty node in the bucket linked list
	// ...
}
        `
      }
    ];

    const articlesPerPage = 2; // Show one article per page
    const currentPage = ref(1);

    const totalPages = computed(() => Math.ceil(articles.length / articlesPerPage));
    
    const paginatedArticles = computed(() => {
      const start = (currentPage.value - 1) * articlesPerPage;
      const end = start + articlesPerPage;
      return articles.slice(start, end);
    });

    return {
      articles,
      paginatedArticles,
      currentPage,
      totalPages
    };
  }
});
</script>

<style scoped>
main {
  padding: 20px;
  background-color: lightgrey;
  min-height: 100vh;
}

.article-container {
  max-width: 1200px;
  margin: 0 auto;
}

.article-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.article-card h2 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 1.8em;
}

.date {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 15px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background-color: #e0e0e0;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.9em;
  color: #666;
}

.content {
  color: #2c3e50;
  line-height: 1.6;
  margin-bottom: 20px;
}

.content p {
  margin-bottom: 1em;
}

.content ul, .content ol {
  margin-left: 20px;
  margin-bottom: 1em;
}

.code-block {
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .article-card {
    padding: 20px;
  }

  .article-card h2 {
    font-size: 1.5em;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
}

.pagination-btn {
  padding: 8px 16px;
  border: none;
  background-color: #2c3e50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.page-info {
  color: #666;
}
</style> 