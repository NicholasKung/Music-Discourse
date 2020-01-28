class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :album, null: false
      t.string :art, null: false
      t.string :artist, null: false
      t.integer :year, null: false
      t.string :genre, null: false

      t.timestamps
    end
  end
end
