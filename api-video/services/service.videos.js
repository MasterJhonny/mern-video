
class VideosService {
    constructor () {
        this.pool = require('../database/database');
    }

    async create (data) {
        const rta = await this.pool.query('INSERT INTO videos SET ?', [data]);
        // throw new Error('new Error?')
        console.log(rta);
        return rta.insertId;
    }

    async find () {
        const rta = await this.pool.query('SELECT * FROM videos');
        return rta;
    }

    async findById (id) {
        const rta = await this.pool.query('SELECT * FROM videos WHERE id = ?', [id]);
        if (rta.length === 0) {
            throw new Error('Not Found! Video');
            return;
        }
        console.log(rta);
        return rta[0];
    }

    async getVideosByUserId (id) {
        const rta = await this.pool.query('SELECT * FROM videos WHERE user_id = ?', [id]);
        if (rta.length === 0) {
            throw new Error('Not Found! Video');
            return;
        }
        console.log(rta);
        return rta;
    }

    async update (id, changes) {
        const rta = await this.pool.query('UPDATE videos SET ? where id = ?', [changes, id]);
        const { affectedRows } = rta;
        if (affectedRows === 0) {
            throw new Error('Not Found! Video');
            return;
        }
        console.log(rta)
    }

    async delete (id) {
        const rta = await this.pool.query('DELETE FROM videos WHERE id = ?', [id]);
        const { affectedRows } = rta;
        if (affectedRows === 0) {
            throw new Error('Not Found! Video');
            return;
        }
        console.log('delete!', rta)
    }

}

module.exports = { VideosService }