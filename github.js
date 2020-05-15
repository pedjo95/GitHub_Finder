class GitHub {
  constructor() {
    this.client_ID = "14e0e468b8430006f247",
    this.client_Secret = "ca06c1bf1edd2567ebda9eb568a07790faa36030"
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_Secret}`);

    const profile = await profileResponse.json();

    
    return {
      profile
    }
  } 
}